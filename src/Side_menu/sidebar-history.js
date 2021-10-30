import React from "react";
import '../css/editor.css'

export default function SidebarHistory(historyList){

    let options = [];

    const goTo = (id) => {
        window.location = window.location.origin + '/editor/' + id
    }

    historyList.forEach((value, key) => {
        options.push(
            <button onClick={() => goTo(key)} className="side-menu-option redactor-shadow-element">
                {value}
            </button>
        )
    })

    return(
        <div className="side-menu-option-list-history">
            {options}
        </div>
    )
}
