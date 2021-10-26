import '../css/editor.css'
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './Main';
import Home from './Home'
import { w3cwebsocket as Ws } from 'websocket'
import {useEffect} from "react";

const client = new Ws('ws://localhost:8080')

function App() {

    useEffect(() => {
        client.onopen = () => {
            console.log('client connected')
        }
        if (client.readyState === WebSocket.OPEN){
            client.send(
                JSON.stringify({
                    type: 'message',
                    msg: 'hello world!'
                })
            )
        }
    }, [])

    return (
        <BrowserRouter>
            <>
                <Route path='/editor/:id' component={Main}/>
                <Route path='/home' component={Home}/>
            </>
        </BrowserRouter>
    );
}

export default App;
