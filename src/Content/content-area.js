import Block from "./block";
import Ck from "./ck";

export default function ContentArea(
    print,
    state,
    setBlockId,
    setBlockTitle,
    setVersionId,
    setVersionTitle,
    setDeleteBlockDialogHidden,
    setDeleteVersionDialogHidden,
    isAddVersionDialogHidden,
    setAddVersionDialogHidden
) {

    return(
        <>
            <div className="print-ck">
                <Ck content={print} />
            </div>
            <div id="content-area">
                {
                    state.map(b => <Block
                        setBlockId={setBlockId}
                        setDeleteBlockTitle={setBlockTitle}
                        setDeleteVersionId={setVersionId}
                        setDeleteVersionTitle={setVersionTitle}
                        setDeleteBlockDialogHidden={setDeleteBlockDialogHidden}
                        setDeleteVersionDialogHidden={setDeleteVersionDialogHidden}
                        isAddVersionDialogHidden={isAddVersionDialogHidden}
                        setAddVersionDialogHidden={setAddVersionDialogHidden}
                        b={b}
                    />)
                }
            </div>
        </>
    )

}



