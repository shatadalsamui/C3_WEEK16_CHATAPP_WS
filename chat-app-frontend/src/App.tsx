import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [messages, setMessages] = useState(["hi there","hello"]);


    useEffect(() => {

        const ws = new WebSocket("http://localhost:8080");
        ws.onmessage = (event) => {
            setMessages(m => [...m, event.data])
        }
    },[]);

    return (
        <div className={"h-screen bg-gray-800"}>
            <br/><br/><br/>
            <div className={"h-[80vh]"}>
                {messages.map(message => <div className={"m-8"}>
                    <span className={"bg-white text-black rounded p-4"}>
                        {message}
                    </span>
                </div>)}
            </div>
            <div className={"w-full bg-white flex p-1"}>
                <input className={"flex-1"}/>
                <button onClick={()=>{
                    ws.send("" +
                        "" +
                        "")
                }} className={"bg-slate-600 text-white p-3 rounded"}>Send Message</button>
            </div>
        </div>
    )
}

export default App
