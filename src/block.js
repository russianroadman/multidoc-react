import React from "react";
import './editor.css'
import Ck from "./ck";

export default function Block(isAddVersionDialogHidden, setAddVersionDialogHidden, blockTitle, versionTitle, pages, page, content){

    const showNewVersion = () => {
        if (isAddVersionDialogHidden) setAddVersionDialogHidden(false);
    }

    return(<div className="b redactor-shadow-element">
        <div className="b-fav b-fav-starred"/>
        <input className="v-label" placeholder="Created by..." defaultValue={versionTitle}/>
        {Ck(content)}
        <div className="b-bottom">
            <input className="b-label" placeholder="Block title" defaultValue={blockTitle}/>
            <div className="v-arrows">
                <div className="v-left">
                    <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon v-arrow"
                         viewBox="0 0 24 24">
                        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                    </svg>
                </div>
                <div className="v-page">{page}/{pages}</div>
                <div className="v-right">
                    <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon v-arrow"
                         viewBox="0 0 24 24">
                        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                    </svg>
                </div>
            </div>
            <div className="b-dropdown">
                <button className="b-dropdown-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon" width="3vh"
                         height="3vh" viewBox="0 0 24 24">
                        <path
                            d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
                    </svg>
                </button>
                <div className="b-dropdown-menu redactor-shadow-element">
                    <button className="b-dropdown-menu-option">Add version</button>
                    <button className="b-dropdown-menu-option">Star version</button>
                    <button className="b-dropdown-menu-option">Delete version</button>
                    <button className="b-dropdown-menu-option">Delete block</button>
                </div>
            </div>
        </div>
    </div>)
}