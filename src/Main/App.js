import '../css/editor.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Editor from './Editor';
import Home from './Home'
import { w3cwebsocket as Ws } from 'websocket'
import NoSuchPage from "./NoSuchPage";

export const client = new Ws('ws://localhost:8080')

function App() {

    return (
        <>
            {window.onafterprint = () => {
                window.location = window.location
            }}
            <BrowserRouter>
                <Switch>
                    <Route exact path='/editor/:id' component={Editor}/>
                    <Route exact path='/home' component={Home}/>
                    <Route component={NoSuchPage} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
