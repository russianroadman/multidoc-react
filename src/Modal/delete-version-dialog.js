import React from "react";
import {deleteVersion} from "../Api/api-service";

export default function DeleteVersionDialog(versionId, versionTitle, isDeleteVersionDialogHidden, setDeleteVersionDialogHidden){

	const del = () => {
		deleteVersion(versionId)
		hide()
	}

	const hide = () => {
		setDeleteVersionDialogHidden(true)
	}

	return(
		<div className={
			isDeleteVersionDialogHidden
				? 'modal-yes-no redactor-shadow-element hidden'
				: 'modal-yes-no redactor-shadow-element'
		}>
			<div className="model-yes-no-message">
				Version by {versionTitle} will be deleted
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
