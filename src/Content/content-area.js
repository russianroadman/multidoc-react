import Block from "./block";

export default function ContentArea(state, setBlockId, isAddVersionDialogHidden, setAddVersionDialogHidden) {

    return(
        <div id="content-area">
            {
                state.map(b => <Block
                    setBlockId={setBlockId}
                    isAddVersionDialogHidden={isAddVersionDialogHidden}
                    setAddVersionDialogHidden={setAddVersionDialogHidden}
                    b={b}
                />)
            }
        </div>
    )

}



