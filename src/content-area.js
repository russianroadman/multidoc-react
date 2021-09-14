import React from "react";
import Block from "./block";


export default function ContentArea() {

    const blocks = [];

    for (let i = 0; i < 3; i++) {
        blocks.push(Block('block', 'version', 13, 7))
    };

    return(
        <div id="content-area">{blocks}</div>
    )
}



