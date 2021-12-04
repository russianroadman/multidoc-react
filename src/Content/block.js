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

                    // updateBlockTitle,
                    // updateVersionTitle,
                    // updateContent,

                    setIsEditing,

                    b
                }){

    const [page, setPage] = useState(0)

    const goRight = () => {
        if (page < b.versions.length-1) {
            setPage(page+1)
        }
    }

    const goLeft = () => {
        if (page > 0) {
            setPage(page-1)
        }
    }

    const showNewVersion = () => {
        if (isAddVersionDialogHidden){
            setAddVersionDialogHidden(false);
            setBlockId(b.id)
        }
    }

    const starVersion = () => {
        let versionId = b.versions[page].id
        _setPreferred(versionId)
    }

    const deleteVersion = () => {
        let versionId = b.versions[page].id
        setDeleteVersionId(versionId)
        setDeleteVersionTitle(b.versions.find(v => v.id === versionId).title)
        setDeleteVersionDialogHidden(false)
    }

    const deleteBlock = () => {
        setBlockId(b.id)
        setDeleteBlockTitle(b.title)
        setDeleteBlockDialogHidden(false)
    }

    const updateVTitle = (value) => {
        let versionId = b.versions[page].id
        saveVersionTitle(versionId, value)
    }

    const updateBTitle = (value) => {
        saveBlockTitle(b.id, value)
    }

    const isStarred = () => {
        if ( b.versions[page] === undefined ){
            setPage(0)
            return false
        }
        return !!b.versions.find(v => v.id === b.versions[page].id).preferred;
    }

    const getVLabelValue = () => {
        if ( b.versions[page] === undefined ){
            setPage(0)
            return false
        }
        return b.versions.find(v => v.id === b.versions[page].id ).title
    }

    const getSelectedContent = () => {
        if ( b.versions[page] === undefined ){
            setPage(0)
            return false
        }
        return b.versions.find(v => v.id ===  b.versions[page].id ).content.content
    }

    const getSelectedContentId = () => {
        if ( b.versions[page] === undefined ){
            setPage(0)
            return false
        }
        return b.versions.find(v => v.id ===  b.versions[page].id ).content.id
    }

    return(
        <div className="b redactor-shadow-element">
            <div className={ isStarred() ? "b-fav b-fav-starred" : "b-fav" } />
            <input className="v-label"
                   placeholder="Created by..."
                   value={ getVLabelValue() }
                   onChange={e => updateVTitle(e.target.value)}/>
            <Ck
                key={ getSelectedContentId() }
                contentId={ getSelectedContentId() }
                content={ getSelectedContent() }
                setIsEditing={setIsEditing}
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
                    <div className="v-page">{page+1}/{b.versions.length}</div>
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
