import React, {useState} from "react";
import {createBlock} from "../Api/api-service";

export default function AddBlockDialog(documentId, isAddBlockDialogHidden, setAddBlockDialogHidden){

    const [blockTitle, setBlockTitle] = useState('')
    const [versionTitle, setVersionTitle] = useState('')

    const close = () => {
        setAddBlockDialogHidden(true)
    }

    const updateBlockTitle = (value) => {
        setBlockTitle(value)
    }

    const updateVersionTitle = (value) => {
        setVersionTitle(value)
    }

    const addBlock = () => {
        createBlock(documentId, blockTitle, versionTitle)
        close()
    }

    return(
        <div className={isAddBlockDialogHidden ? "add-block add-block-hidden redactor-shadow-element" : "add-block redactor-shadow-element"}>
            <div className="add-block-label">
                Create new block
                <button onClick={close} className="add-block-close">
                    <svg width="1rem" height="1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
                </button>
            </div>
            <input placeholder="Block title" className="add-block-input"
                   value={blockTitle}
                   onChange={e => updateBlockTitle(e.target.value)}
            />
            <input placeholder="Author name" className="add-block-input"
                   value={versionTitle}
                   onChange={e => updateVersionTitle(e.target.value)}/>
            <button
                className="add-block-button"
                onClick={addBlock}
            >
                Add block
            </button>
        </div>
    )
}
