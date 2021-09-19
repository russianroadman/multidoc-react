import './editor.css'
import ContentArea from "./content-area";
import Top from "./top";
import AddBlockButton from "./add-block-button";
import AddBlock from "./add-block";
import {useState} from "react";

function App() {

    const [isAddBlockDialogHidden, setAddBlockDialogHidden] = useState(true);

    return (
        <div className="App">
            {Top("My first App")}
            {AddBlock(isAddBlockDialogHidden, setAddBlockDialogHidden)}
            <ContentArea/>
            {AddBlockButton(isAddBlockDialogHidden, setAddBlockDialogHidden)}
        </div>
    );
}

export default App;
