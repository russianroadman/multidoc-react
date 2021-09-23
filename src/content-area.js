import React from "react";
import Block from "./block";
import {document} from "./document";

export default function ContentArea(isAddVersionDialogHidden, setAddVersionDialogHidden) {

    const blocks = [];

    document.blocks.forEach(b => {
        blocks.push(
            Block(
                isAddVersionDialogHidden, setAddVersionDialogHidden,
                b
            )
        )
    })

    return(
        <div id="content-area">{blocks}</div>
    )
}



