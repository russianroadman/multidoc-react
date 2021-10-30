import React from "react";
import {deleteDocument} from "../Api/api-service";

export default function DeleteDocumentDialog(documentId, isDeleteDocumentDialogHidden, setDeleteDocumentDialogHidden){

	const del = () => {
		deleteDocument(documentId)
		window.location = window.location.origin + '/home'
	}

	const hide = () => {
		setDeleteDocumentDialogHidden(true)
	}

	return(
		<div className={
			isDeleteDocumentDialogHidden
				? 'modal-yes-no redactor-shadow-element hidden'
				: 'modal-yes-no redactor-shadow-element'
		}>
			<div className="model-yes-no-message">
				Document will be deleted
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
