import Block from "./block";
import Ck from "./ck";

export default function ContentArea({
                                        print,
                                        blocks,
                                        setBlockId,
                                        setBlockTitle,
                                        setVersionId,
                                        setVersionTitle,
                                        setDeleteBlockDialogHidden,
                                        setDeleteVersionDialogHidden,
                                        isAddVersionDialogHidden,
                                        setAddVersionDialogHidden,
                                        setIsEditing
                                    }) {

    return(
        <>
            <div className="print-ck">
                <Ck content={print} />
            </div>
            <div id="content-area">
                {
                    blocks.map(b => <Block

                        setBlockId={setBlockId}
                        setDeleteBlockTitle={setBlockTitle}
                        setDeleteVersionId={setVersionId}
                        setDeleteVersionTitle={setVersionTitle}
                        setDeleteBlockDialogHidden={setDeleteBlockDialogHidden}
                        setDeleteVersionDialogHidden={setDeleteVersionDialogHidden}
                        isAddVersionDialogHidden={isAddVersionDialogHidden}
                        setAddVersionDialogHidden={setAddVersionDialogHidden}

                        setIsEditing={setIsEditing}

                        b={b}
                        key={b.id}
                    />)
                }
            </div>
        </>
    )

}



