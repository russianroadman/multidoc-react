import React, {useState} from "react";
import './editor.css'
import Ck from "./ck";

export default function Block(blockTitle, versionTitle, pages, page, content){

    const [editorContextMenuActive, setEditorContextMenuActive] = useState(false);

    const toggleEditorContextMenuActive = () => {
        setEditorContextMenuActive(!editorContextMenuActive)
    }

    const checkToggled = () => {
        if (editorContextMenuActive){
            toggleEditorContextMenuActive()
        }
    }

    return(<div className="b redactor-shadow-element">
        <div className="b-fav b-fav-starred"></div>
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
            <div className="b-menu-wrapper">
                <div className="b-menu">
                    <div className={editorContextMenuActive ? 'b-menu-nav b-menu-nav-active': 'b-menu-nav'}>
                        <button className="b-menu-nav-option">
                            <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon" width="2vh"
                                 height="2vh" viewBox="0 0 24 24">
                                <path
                                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                            </svg>
                        </button>
                        <button className="b-menu-nav-option">
                            <span>add version</span>
                        </button>
                        <button className="b-menu-nav-option">
                            <span>delete block</span>
                        </button>
                        <button className="b-menu-nav-option">
                            <span>delete version</span>
                        </button>
                    </div>
                    <button
                        className="b-menu-btn"
                        onBlur={checkToggled}
                        onClick={toggleEditorContextMenuActive}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon" width="3vh"
                             height="3vh" viewBox="0 0 24 24">
                            <path
                                d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>)
}