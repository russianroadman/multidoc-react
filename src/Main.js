import Top from "./top";
import ShareDialog from "./share-dialog";
import AddBlock from "./add-block";
import AddVersion from "./add-version";
import ContentArea from "./content-area";
import AddBlockButton from "./add-block-button";
import {useState} from "react";
import {useParams} from "react-router-dom";

export default function Main(){

	const [isAddBlockDialogHidden, setAddBlockDialogHidden] = useState(true);
	const [isAddVersionDialogHidden, setAddVersionDialogHidden] = useState(true);
	const [isShareDialogHidden, setShareDialogHidden] = useState(true);
	const { id } = useParams()

	return(
		<div className="App">
			{Top(
				"My first App",
				isShareDialogHidden, setShareDialogHidden)}
			{ShareDialog(isShareDialogHidden)}
			{AddBlock(isAddBlockDialogHidden, setAddBlockDialogHidden)}
			{AddVersion(isAddVersionDialogHidden, setAddVersionDialogHidden)}
			{ContentArea(id, isAddVersionDialogHidden, setAddVersionDialogHidden)}
			{AddBlockButton(isAddBlockDialogHidden, setAddBlockDialogHidden)}
		</div>
	)

}
