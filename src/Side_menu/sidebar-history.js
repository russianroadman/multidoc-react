import React from "react";
import '../css/editor.css'

export default function SidebarHistory(historyList){

    let options = [];

    historyList.forEach(el => options.push(
        <button className="side-menu-option redactor-shadow-element">
            {el}
        </button>
    ))

    return(
        <div className="side-menu-option-list-history">
            {options}
        </div>
    )
}
