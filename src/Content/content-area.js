import Block from "./block";
import Ck from "./ck";

export default function ContentArea({
                                        print,
                                        blocks,
                                        setBlocks,
                                        setBlockId,
                                        setBlockTitle,
                                        setVersionId,
                                        setVersionTitle,
                                        setDeleteBlockDialogHidden,
                                        setDeleteVersionDialogHidden,
                                        isAddVersionDialogHidden,
                                        setAddVersionDialogHidden
                                    }) {

    const updateBlockTitle = (id, newTitle) => {
        setBlocks(prev => prev.map(block => block.id === id ? {...block, title: newTitle} : block))
    }

    const updateVersionTitle = (id, newTitle) => {

        setBlocks(prev => prev.map(block => block.versions.filter(v => v.id === id).length === 1 ? {
            ...block, versions: block.versions.map(v => v.id === id ? {...v, title: newTitle} : v)
        } : block))

    }

    const updateContent = (id, newContent) => {

        const updatedVersion = (v) => {
            v.content.content = newContent
            return v
        }

        setBlocks(prev => prev.map(block => block.versions.filter(v => v.content.id === id).length === 1 ? {
            ...block, versions: block.versions.map(
                v => v.content.id === id ? {...v, this: updatedVersion(v)} : v
            )
        } : block))

    }

//     const [blocks, setBlocks] = useState(yourblocks);
//
//     cons updateBlockTitle = (id, newTitle) => {
//         setBlocks(prev => prev.map(block => block.id === id ? {...block, title: newTitle} : block));
//     }
//
// ...
//     {blocks.map(b => <Block updateTitle={updateBlockTitle} />)}
//
//     function Block({title, updateTitle, id}) {
//     ...
//         <input onChange={e => updateTitle(id, e.target.value)} />
//     }

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

                        // blockTitle={_blockTitle}
                        // setBlockTitle={_setBlockTitle}
                        // versionTitle={_versionTitle}
                        // setVersionTitle={_setVersionTitle}
                        // content={_content}
                        // setContent={_setContent}

                        updateBlockTitle={updateBlockTitle}
                        updateVersionTitle={updateVersionTitle}
                        updateContent={updateContent}

                        b={b}
                        key={b.id}
                    />)
                }
            </div>
        </>
    )

}



