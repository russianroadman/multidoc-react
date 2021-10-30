import SidebarFind from "./sidebar-find";
import SidebarActions from "./sidebar-actions";
import SidebarHistory from "./sidebar-history";
import React, {useState} from "react";
import {getHistory} from "../Util/history";

export default function Sidebar(setPrint, documentId, toggled, isShareDialogHidden, setShareDialogHidden, setDeleteDocumentDialogHidden){

    const history = getHistory()

    const [historyList, setHistoryList] = useState(
        history
    );

    return(
        <div className={toggled ? 'side-menu-wrapper side-menu-wrapper-active' : 'side-menu-wrapper'}>
            <div className="side-menu">
                <div className="side-menu-option-list">
                    {SidebarFind(history, historyList, setHistoryList)}
                    {SidebarActions(setPrint, documentId, isShareDialogHidden, setShareDialogHidden, setDeleteDocumentDialogHidden)}
                </div>
                {SidebarHistory(historyList)}
            </div>
        </div>
    )
}
