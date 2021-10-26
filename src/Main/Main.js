import Top from "../Top/top";
import ShareDialog from "../Side_menu/share-dialog";
import AddBlockDialog from "../Modal/add-block-dialog";
import AddVersionDialog from "../Modal/add-version-dialog";
import ContentArea from "../Content/content-area";
import AddBlockButton from "../Content/add-block-button";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {load} from "../Api/api-service";

export default function Main(){

	const [isAddBlockDialogHidden, setAddBlockDialogHidden] = useState(true);
	const [isAddVersionDialogHidden, setAddVersionDialogHidden] = useState(true);
	const [isShareDialogHidden, setShareDialogHidden] = useState(true);
	const [blocks, setBlocks] = useState([])
	const [documentTitle, setDocumentTitle] = useState('')
	const [documentId, setDocumentId] = useState('')
	const [blockId, setBlockId] = useState('')

	const { id } = useParams()

	useEffect(() => {
		load(id).then(data => {
			setDocumentId(data.id)
			setDocumentTitle(data.title)
			setBlocks(data.blocks)
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
			/>
			{ShareDialog(isShareDialogHidden)}
			{AddBlockDialog(documentId, isAddBlockDialogHidden, setAddBlockDialogHidden)}
			{AddVersionDialog(blockId, isAddVersionDialogHidden, setAddVersionDialogHidden)}
			{ContentArea(blocks, setBlockId, isAddVersionDialogHidden, setAddVersionDialogHidden)}
			{AddBlockButton(isAddBlockDialogHidden, setAddBlockDialogHidden)}
		</div>
	)

}
