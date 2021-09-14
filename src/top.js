import React from "react";
import './editor.css'

function openSideMenu() {

}

const documentTitle = 'My first document'

export default function Top(){
    return(
        <div className="top-bar">
            <button className="burger" onClick={openSideMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="grey" width="100%" height="100%" viewBox="0 0 24 24">
                    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                </svg>
            </button>
            <input placeholder="Document title" type="text" className="doc-title redactor-shadow-element" value={documentTitle}/>
        </div>
    )
}