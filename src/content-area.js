import React, {useEffect, useState} from "react";
import Block from "./block";
import {load} from "./api-service";

export default function ContentArea(id, isAddVersionDialogHidden, setAddVersionDialogHidden) {

    const [state, setState] = useState([])

    useEffect(() => {
        load(id).then(data => {
            setState(data.blocks)
        })
    }, [id])

    return(
        <div id="content-area">
            {
                state.map(b => <Block
                    isAddVersionDialogHidden={isAddVersionDialogHidden}
                    setAddVersionDialogHidden={setAddVersionDialogHidden}
                    b={b}
                />)
            }
        </div>
    )
}



