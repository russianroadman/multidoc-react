import React from "react";
import './editor.css'

export default function ShareDialog(isShareDialogHidden) {

    return(
        <div className={
            isShareDialogHidden? "copy-to-clipboard-message" : "copy-to-clipboard-message copy-to-clipboard-message-active"
        }>
            Link copied to clipboard!
        </div>
    )
}