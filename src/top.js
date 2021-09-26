import React, {useState} from "react";
import './editor.css'
import Sidebar from "./sidebar";

export default function Top(documentTitle, isShareDialogHidden, setShareDialogHidden){

    const [toggled, setToggled] = useState(false);
    const [docTitle, setDocTitle] = useState(documentTitle);

    const toggleMenu = () => {
        setToggled(!toggled)
    }

    const updateDTitle = (value) => {
        setDocTitle(value)
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
                       value={docTitle}
                       onChange={e => updateDTitle(e.target.value)}/>
            </div>
            {Sidebar(toggled, isShareDialogHidden, setShareDialogHidden)}
        </>
    )
}