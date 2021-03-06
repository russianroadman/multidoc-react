import React from "react";

export default function SidebarFind(history, historyList, setHistoryList){

    const search = (e) => {
        let v = e.target.value
        // let newList = history.filter(item => item.value.toUpperCase().includes(v.toUpperCase()) || v === '')
        let newList = new Map(
            [...history]
                .filter(([k, val]) => val.toUpperCase().includes(v.toUpperCase()) || v === '')
        )
        setHistoryList(newList)
    }

    return(
        <div className="side-menu-option side-menu-option-find">
            <div className="side-menu-option-find-field-wrapper redactor-shadow-element">
                <input type="text" onKeyUp={e => search(e)} placeholder="Search recent..." className="side-menu-option-find-field" />
            </div>
            <div className="side-menu-option-find-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="darkgray" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
            </div>
        </div>
    )
}
