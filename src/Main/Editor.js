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

	useEffect(() => {

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
			{ContentArea(print, blocks, setBlockId, setBlockTitle, setVersionId, setVersionTitle, setDeleteBlockDialogHidden, setDeleteVersionDialogHidden, isAddVersionDialogHidden, setAddVersionDialogHidden)}
			{AddBlockButton(isAddBlockDialogHidden, setAddBlockDialogHidden)}
		</div>
	)

}
