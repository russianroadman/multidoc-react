import React, {useState} from "react";
import '../css/editor.css'
import Ck from "./ck";
import {
    saveBlockTitle,
    saveVersionTitle,
    setPreferred as _setPreferred
} from "../Api/api-service";

export default function Block({
                    setBlockId,
                    setDeleteBlockTitle,
                    setDeleteVersionId,
                    setDeleteVersionTitle,
                    setDeleteVersionDialogHidden,
                    setDeleteBlockDialogHidden,
                    isAddVersionDialogHidden,
                    setAddVersionDialogHidden,

                    // blockTitle,
                    // setBlockTitle,
                    // versionTitle,
                    // setVersionTitle,
                    // content,
                    // setContent,

                    updateBlockTitle,
                    updateVersionTitle,
                    updateContent,

                    b
                }){

    // const [blockTitle, setBlockTitle] = useState(b.title)


    // const [versionTitle, setVersionTitle] = useState(b.versions[0].title)
    const [pages, setPages] = useState(b.versions.length)
    const [page, setPage] = useState(1)
    // const [content, setContent] = useState(b.versions[0].content.content)
    const [isPreferred, setPreferred] = useState(b.versions[0].preferred)

    const [contentId, setContentId] = useState(b.versions[0].content.id)
    const [versionId, setVersionId] = useState(b.versions[0].id)

    const goRight = () => {
        if (page < pages) {
            const t = b.versions[page];
            switchBlockContent(t.id, t.title, page+1, t.content.id, t.content.content, t.preferred)
        }
    }

    const goLeft = () => {
        if (page > 1) {
            const t = b.versions[page-2];
            switchBlockContent(t.id, t.title, page-1, t.content.id, t.content.content, t.preferred)
        }
    }

    const switchBlockContent = (versionId_, versionTitle_, page_, contentId_, content_, isPreferred_) => {
        setVersionId(versionId_)
        // setVersionTitle(versionTitle_)
        setPage(page_)
        setContentId(contentId_)
        // setContent(content_)
        setPreferred(isPreferred_)
    }

    const showNewVersion = () => {
        if (isAddVersionDialogHidden){
            setAddVersionDialogHidden(false);
            setBlockId(b.id)
        }
    }

    const starVersion = () => {
        _setPreferred(versionId)
    }

    const deleteVersion = () => {
        setDeleteVersionId(versionId)
        // setDeleteVersionTitle(versionTitle)
        setDeleteVersionDialogHidden(false)
    }

    const deleteBlock = () => {
        setBlockId(b.id)
        setDeleteBlockTitle(b.title)
        setDeleteBlockDialogHidden(false)
    }

    const updateVTitle = (value) => {
        // setVersionTitle(value)
        updateVersionTitle(versionId, value)
        saveVersionTitle(versionId, value)
    }

    const updateBTitle = (value) => {
        // setBlockTitle(value)
        updateBlockTitle(b.id, value)
        saveBlockTitle(b.id, value)
    }

    return(
        <div className="b redactor-shadow-element">
            <div className={ isPreferred ? "b-fav b-fav-starred" : "b-fav" } />
            <input className="v-label"
                   placeholder="Created by..."
                   value={b.versions.find(v => v.id === versionId).title}
                   // value={versionId}
                   onChange={e => updateVTitle(e.target.value)}/>
            {/*<Ck key={contentId} contentId={contentId} content={content} setContent={setContent} />*/}
            <Ck
                key={contentId}
                contentId={contentId}
                content={b.versions.find(v => v.id === versionId).content.content}
                updateContent={updateContent}
            />
            <div className="b-bottom">
                <input className="b-label"
                       placeholder="Block title"
                       value={b.title}
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
                        <button onMouseDown={starVersion} className="b-dropdown-menu-option">Star version</button>
                        <button onMouseDown={deleteVersion} className="b-dropdown-menu-option">Delete version</button>
                        <button onMouseDown={deleteBlock} className="b-dropdown-menu-option">Delete block</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
