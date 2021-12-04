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
import {applyResult, setId, setSetBlocks} from "../Api/websocket-service";

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

	const { id } = useParams()

	const connection = (id) => {
		console.log('client about to connect...')
		client.onopen = () => {
			console.log('client connected')
			if (client.readyState === WebSocket.OPEN){
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
		client.onmessage = (m) => {
			let result = JSON.parse(m.data)
			// applyResult(result, setDocumentTitle, blocks)
			console.log('action:', result.payload.action)
			/** kek */
			load(id).then(data => {
				console.log('trying to reload document', id)
				if (data.id !== undefined){
					console.log('reloading')
					setBlocks(data.blocks)
				} else {
					console.log('reload failed')
					window.location = window.location.origin + '/404'
				}
			})
			/** kek */
		}
	}

	useEffect(() => {

		connection(id)
		setId(id)
		setSetBlocks(blocks, setBlocks)

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
	}, [id])

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
				setBlocks={setBlocks}
				setBlockId={setBlockId}
				setBlockTitle={setBlockTitle}
				setVersionId={setVersionId}
				setVersionTitle={setVersionTitle}
				setDeleteBlockDialogHidden={setDeleteBlockDialogHidden}
				setDeleteVersionDialogHidden={setDeleteVersionDialogHidden}
				isAddVersionDialogHidden={isAddVersionDialogHidden}
				setAddVersionDialogHidden={setAddVersionDialogHidden}
			/>
			{AddBlockButton(documentId, isAddBlockDialogHidden, setAddBlockDialogHidden)}
		</div>
	)

}
