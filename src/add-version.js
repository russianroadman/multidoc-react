import React from "react";

export default function AddVersion(isAddVersionDialogHidden, setAddVersionDialogHidden){

    const close = () => {
        setAddVersionDialogHidden(true)
    }

    const addVersion = () => {
        //todo
        close()
    }

    return(
        <div className={isAddVersionDialogHidden ? "add-version add-version-hidden redactor-shadow-element" : "add-version redactor-shadow-element"}>
            <div className="add-version-label">
                Create new version
                <button onClick={close} className="add-version-close">
                    X
                </button>
            </div>
            <input placeholder="Author name" className="add-version-input" />
            <button
                className="add-version-button"
                onClick={addVersion}
            >
                Add version
            </button>
        </div>
    )
}
