import React from "react";

export default function AddBlock(isAddBlockDialogHidden, setAddBlockDialogHidden){

    const close = () => {
        console.log('hidden : ', isAddBlockDialogHidden)
        setAddBlockDialogHidden(true)
        console.log('hidden : ', isAddBlockDialogHidden)
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
                    X
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
