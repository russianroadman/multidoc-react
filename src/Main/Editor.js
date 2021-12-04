import Top from "../Top/top";
import ShareDialog from "../Side_menu/share-dialog";
import AddBlockDialog from "../Modal/add-block-dialog";
import AddVersionDialog from "../Modal/add-version-dialog";
import ContentArea from "../Content/content-area";
import AddBlockButton from "../Content/add-block-button";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {load} from "../Api/api-service";
import {addDocumentToHistory} from "../Util/history";
import DeleteDocumentDialog from "../Modal/delete-document-dialog";
import DeleteBlockDialog from "../Modal/delete-block-dialog";
import DeleteVersionDialog from "../Modal/delete-version-dialog";
import {client} from "./App";
import {setId} from "../Api/websocket-service";

export default function Editor(){

	const [isAddBlockDialogHidden, setAddBlockDialogHidden] = useState(true)
	const [isAddVersionDialogHidden, setAddVersionDialogHidden] = useState(true)
	const [isDeleteDocumentDialogHidden, setDeleteDocumentDialogHidden] = useState(true)
	const [isDeleteBlockDialogHidden, setDeleteBlockDialogHidden] = useState(true)
	const [isDeleteVersionDialogHidden, setDeleteVersionDialogHidden] = useState(true)
	const [isShareDialogHidden, setShareDialogHidden] = useState(true)
	const [blocks, setBlocks] = useState([])
	const [documentTitle, setDocumentTitle] = useState('')
	const [documentId, setDocumentId] = useState('')
	const [blockId, setBlockId] = useState('')
	const [versionId, setVersionId] = useState('')
	const [blockTitle, setBlockTitle] = useState('')
	const [versionTitle, setVersionTitle] = useState('')
	const [print, setPrint] = useState('')
	const [isEditing, setIsEditing] = useState(false)

	const { id } = useParams()

	useEffect(() => {

		const connection = (id) => {
			client.onopen = () => {
				if (client.readyState === WebSocket.OPEN){
					console.log('client connected')
					client.send(
						JSON.stringify({
							type: 'message',
							msg: {
								type: 'connection',
								payload: {
									documentId : id
								}
							}
						})
					)
				}
			}
			client.onmessage = () => {
				if (!isEditing){
					load(id).then(data => {
						if (data.id !== undefined){
							setBlocks(data.blocks)
						} else {
							window.location = window.location.origin + '/404'
						}
					})
				}
			}
		}

		connection(id)
		setId(id)

		load(id).then(data => {
			if (data.id !== undefined){
				setDocumentId(data.id)
				setDocumentTitle(data.title)
				setBlocks(data.blocks)
				addDocumentToHistory(data.title, id)
			} else {
				window.location = window.location.origin + '/404'
			}
		})

	}, [id, isEditing])

	return(
		<div className="App">
			<Top
				documentId={documentId}
				documentTitle={documentTitle}
				setDocumentTitle={setDocumentTitle}
				isShareDialogHidden={isShareDialogHidden}
				setShareDialogHidden={setShareDialogHidden}
				setPrint={setPrint}
				setDeleteDocumentDialogHidden={setDeleteDocumentDialogHidden}
			/>
			{ShareDialog(isShareDialogHidden)}
			{AddBlockDialog(documentId, isAddBlockDialogHidden, setAddBlockDialogHidden)}
			{AddVersionDialog(blockId, isAddVersionDialogHidden, setAddVersionDialogHidden)}
			{DeleteDocumentDialog(documentId, isDeleteDocumentDialogHidden, setDeleteDocumentDialogHidden)}
			{DeleteBlockDialog(blockId, blockTitle, isDeleteBlockDialogHidden, setDeleteBlockDialogHidden)}
			{DeleteVersionDialog(versionId, versionTitle, isDeleteVersionDialogHidden, setDeleteVersionDialogHidden)}
			<ContentArea
				print={print}
				blocks={blocks}
				setBlockId={setBlockId}
				setBlockTitle={setBlockTitle}
				setVersionId={setVersionId}
				setVersionTitle={setVersionTitle}
				setDeleteBlockDialogHidden={setDeleteBlockDialogHidden}
				setDeleteVersionDialogHidden={setDeleteVersionDialogHidden}
				isAddVersionDialogHidden={isAddVersionDialogHidden}
				setAddVersionDialogHidden={setAddVersionDialogHidden}
				setIsEditing={setIsEditing}
			/>
			{AddBlockButton(documentId, isAddBlockDialogHidden, setAddBlockDialogHidden)}
		</div>
	)

}
