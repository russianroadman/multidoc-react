import React from "react";
import {deleteBlock} from "../Api/api-service";

export default function DeleteBlockDialog(blockId, blockTitle, isDeleteBlockDialogHidden, setDeleteBlockDialogHidden){

	const del = () => {
		deleteBlock(blockId)
	}

	const hide = () => {
		setDeleteBlockDialogHidden(true)
	}

	return(
		<div className={
			isDeleteBlockDialogHidden
				? 'modal-yes-no redactor-shadow-element hidden'
				: 'modal-yes-no redactor-shadow-element'
		}>
			<div className="model-yes-no-message">
				Block {blockTitle} will be deleted
			</div>
			<div className="model-yes-no-options">
				<button onClick={del} className="model-yes-no-option yes redactor-shadow-element">
					yes
				</button>
				<button onClick={hide} className="model-yes-no-option no redactor-shadow-element">
					no
				</button>
			</div>
		</div>
	)
}
