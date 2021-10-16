import React, {useState} from "react";
import './editor.css'
import Ck from "./ck";

export default function Block({ isAddVersionDialogHidden, setAddVersionDialogHidden, b }){

    const [blockTitle, setBlockTitle] = useState(b.title)
    const [versionTitle, setVersionTitle] = useState(b.versions[0].title)
    const [pages, setPages] = useState(b.versions.length)
    const [page, setPage] = useState(1)
    const [content, setContent] = useState(b.versions[0].content.content)
    const [isPreferred, setPreferred] = useState(b.versions[0].preferred)

    const goRight = () => {
        if (page < pages) {
            const t = b.versions[page];
            switchBlockContent(t.title, page+1, t.content.content, t.preferred)
        }
    }

    const goLeft = () => {
        if (page > 1) {
            const t = b.versions[page-2];
            switchBlockContent(t.title, page-1, t.content.content, t.preferred)
        }
    }

    const switchBlockContent = (versionTitle_, page_, content_, isPreferred_) => {
        setVersionTitle(versionTitle_)
        setPage(page_)
        setContent(content_)
        setPreferred(isPreferred_)
    }

    const showNewVersion = () => {
        console.log('hi herbert')
        if (isAddVersionDialogHidden) setAddVersionDialogHidden(false);
    }

    const updateVTitle = (value) => {
        setVersionTitle(value)
    }

    const updateBTitle = (value) => {
        setBlockTitle(value)
    }

    return(
        <div className="b redactor-shadow-element">
            <div className={ isPreferred ? "b-fav b-fav-starred" : "b-fav" } />
            <input className="v-label"
                   placeholder="Created by..."
                   value={versionTitle}
                   onChange={e => updateVTitle(e.target.value)}/>
            <Ck content={content} />
            <div className="b-bottom">
                <input className="b-label"
                       placeholder="Block title"
                       value={blockTitle}
                       onChange={e => updateBTitle(e.target.value)}/>
                <div className="v-arrows">
                    <button onClick={goLeft} className="v-left">
                        <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon v-arrow"
                             viewBox="0 0 24 24">
                            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                        </svg>
                    </button>
                    <div className="v-page">{page}/{pages}</div>
                    <button onClick={goRight} className="v-right">
                        <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon v-arrow"
                             viewBox="0 0 24 24">
                            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                        </svg>
                    </button>
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
                        <button onMouseDown={showNewVersion} className="b-dropdown-menu-option">Add version</button>
                        <button className="b-dropdown-menu-option">Star version</button>
                        <button className="b-dropdown-menu-option">Delete version</button>
                        <button className="b-dropdown-menu-option">Delete block</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
