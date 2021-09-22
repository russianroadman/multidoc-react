import React from "react";

export default function AddBlock(isAddBlockDialogHidden, setAddBlockDialogHidden){

    const close = () => {
        setAddBlockDialogHidden(true)
    }

    const addBlock = () => {
        //todo
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
            <input placeholder="Block title" className="add-block-input" />
            <input placeholder="Author name" className="add-block-input" />
            <button
                className="add-block-button"
                onClick={addBlock}
            >
                Add block
            </button>
        </div>
    )
}
