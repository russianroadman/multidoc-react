import '../css/editor.css'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Editor from './Editor';
import Home from './Home'
import { w3cwebsocket as Ws } from 'websocket'
import NoSuchPage from "./NoSuchPage";

// export const client = new Ws('ws://localhost:8080')
export const client = new Ws('ws://https://multidoc-core.herokuapp.com')

function App() {

    return (
        <>
            {window.onafterprint = () => {
                window.location.reload()
            }}
            <BrowserRouter>
                <Switch>
                    <Route exact path='/editor/:id' component={Editor}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/'>
                        <Redirect to={'/home'} />
                    </Route>
                    <Route component={NoSuchPage} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
