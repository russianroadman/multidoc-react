import React, {useState} from "react";
import './editor.css'

export default function Top(documentTitle){

    const [toggled, setToggled] = useState(false);

    const toggleMenu = () => {
        setToggled(!toggled)
    }

    return(
        <>
            <div className="top-bar">
                <button className="burger" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="grey" width="100%" height="100%" viewBox="0 0 24 24">
                        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                    </svg>
                </button>
                <input placeholder="Document title" type="text" className="doc-title redactor-shadow-element" defaultValue={documentTitle}/>
            </div>
            <div className={toggled ? 'side-menu-wrapper side-menu-wrapper-active' : 'side-menu-wrapper'}>
                <div className="side-menu">
                    <div className="side-menu-option-list">
                        <div className="side-menu-option">
                            find
                        </div>
                        <div className="side-menu-option">
                            share
                        </div>
                        <div className="side-menu-option">
                            export
                        </div>
                        <div className="side-menu-option">
                            delete
                        </div>
                    </div>
                    <div className="side-menu-message">
                        recent
                    </div>
                    <div className="side-menu-option-list"></div>
                </div>
            </div>
        </>
    )
}