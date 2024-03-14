import { createRoot } from "react-dom/client";

export function Welcome({name, age}){
    return <div>
    <p>Welcome, {name}!</p>
    <p>You are {age} years old</p>
    </div>
}

export function App(){
    return (
        <div>
            <Welcome name="Marina" age={26}/>
        </div>
    );
}
createRoot(document.getElementById('root')).render(<App />)