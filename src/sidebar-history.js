import React from "react";
import './editor.css'

export default function SidebarHistory(historyList){

    let options = [];

    historyList.forEach(el => options.push(
        <div className="side-menu-option">
            {el}
        </div>
    ))

    return(
        <div className="side-menu-option-list-history">
            {options}
        </div>
    )
}
