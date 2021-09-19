import SidebarFind from "./sidebar-find";
import SidebarActions from "./sidebar-actions";
import SidebarHistory from "./sidebar-history";
import React, {useState} from "react";
import {history} from "./history";

export default function Sidebar(toggled){

    const [historyList, setHistoryList] = useState(
        history
    );

    return(
        <div className={toggled ? 'side-menu-wrapper side-menu-wrapper-active' : 'side-menu-wrapper'}>
            <div className="side-menu">
                <div className="side-menu-option-list">
                    {SidebarFind(history, historyList, setHistoryList)}
                    <SidebarActions />
                </div>
                {SidebarHistory(historyList)}
            </div>
        </div>
    )
}