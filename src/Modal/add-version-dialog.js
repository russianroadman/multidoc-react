import React, {useState} from "react";
import {createVersion} from "../Api/api-service";

export default function AddVersionDialog(blockId, isAddVersionDialogHidden, setAddVersionDialogHidden){

    const [versionTitle, setVersionTitle] = useState('')

    const close = () => {
        setAddVersionDialogHidden(true)
    }

    const updateVersionTitle = (value) => {
        setVersionTitle(value)
    }

    const addVersion = () => {
        createVersion(blockId, versionTitle)
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
            <input placeholder="Author name" className="add-version-input"
                   value={versionTitle}
                   onChange={e => updateVersionTitle(e.target.value)}/>
            <button
                className="add-version-button"
                onClick={addVersion}
            >
                Add version
            </button>
        </div>
    )
}
