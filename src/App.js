import './editor.css'
import {useState} from "react";
import ContentArea from "./content-area";
import Top from "./top";
import AddBlockButton from "./add-block-button";
import AddBlock from "./add-block";
import AddVersion from "./add-version";
import ShareDialog from "./share-dialog";
import {getTest} from "./requests";

function App() {

    const [isAddBlockDialogHidden, setAddBlockDialogHidden] = useState(true);
    const [isAddVersionDialogHidden, setAddVersionDialogHidden] = useState(true);
    const [isShareDialogHidden, setShareDialogHidden] = useState(true);

    getTest()

    return (
        <div className="App">
            {Top(
                "My first App",
                isShareDialogHidden, setShareDialogHidden)}
            {ShareDialog(isShareDialogHidden)}
            {AddBlock(isAddBlockDialogHidden, setAddBlockDialogHidden)}
            {AddVersion(isAddVersionDialogHidden, setAddVersionDialogHidden)}
            {ContentArea(isAddVersionDialogHidden, setAddVersionDialogHidden)}
            {AddBlockButton(isAddBlockDialogHidden, setAddBlockDialogHidden)}
        </div>
    );
}

export default App;
