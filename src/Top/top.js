import React, {useState} from "react";
import '../css/editor.css'
import Sidebar from "../Side_menu/sidebar";
import {saveDocumentTitle} from "../Api/api-service";

export default function Top(
    {
        setPrint,
        documentId,
        documentTitle,
        setDocumentTitle,
        isShareDialogHidden,
        setShareDialogHidden,
        setDeleteDocumentDialogHidden
    }
){

    const [toggled, setToggled] = useState(false);

    const toggleMenu = () => {
        setToggled(!toggled)
    }

    const updateDocumentTitle = (value) => {
        setDocumentTitle(value)
        saveDocumentTitle(documentId, value)
    }

    return(
        <>
            <div className="top-bar">
                <button className="burger" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="grey" width="100%" height="100%" viewBox="0 0 24 24">
                        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                    </svg>
                </button>
                <input placeholder="Document title"
                       type="text"
                       className="doc-title redactor-shadow-element"
                       value={documentTitle}
                       onChange={e => updateDocumentTitle(e.target.value)}/>
            </div>
            {Sidebar(setPrint, documentId, toggled, isShareDialogHidden, setShareDialogHidden, setDeleteDocumentDialogHidden)}
        </>
    )
}
