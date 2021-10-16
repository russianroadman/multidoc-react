import './editor.css'
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './Main';
import { w3cwebsocket as Ws } from 'websocket'
import {useEffect} from "react";

const client = new Ws('ws://localhost:8080')

function App() {

    useEffect(() => {
        client.onopen = () => {
            console.log('client connected')
        }
        if (client.readyState === 1){
            client.send(
                JSON.stringify({
                    type: 'message',
                    msg: 'goddammit'
                })
            )
        }
    }, [])

    return (
        <BrowserRouter>
            <>
                <Route path='/editor/:id' component={Main}/>
            </>
        </BrowserRouter>
    );
}

export default App;
