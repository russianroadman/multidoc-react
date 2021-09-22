import React from "react";
import Block from "./block";
import {document} from "./document";

export default function ContentArea(isAddVersionDialogHidden, setAddVersionDialogHidden) {

    const blocks = [];

    document.blocks.forEach(b => {
        blocks.push(
            Block(
                isAddVersionDialogHidden, setAddVersionDialogHidden,
                b.title,
                b.versions[0].author,
                b.versions.length,
                1,
                b.versions[0].content.content
            )
        )
    })

    return(
        <div id="content-area">{blocks}</div>
    )
}



