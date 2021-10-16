import './editor.css'
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./Main";

function App() {
    return (
        <BrowserRouter>
            <>
                <Route path='/editor/:id' component={Main}/>
            </>
        </BrowserRouter>
    );
}

export default App;
