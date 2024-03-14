import { createRoot } from "react";

export function AlertClock() {
    function ShowData() {
        const currentData = new Date()

        alert(`Local time is ${currentData.toLocaleTimeString()}`)
    }
    return (
        <diV>
            <h1>What time is it?</h1>
        <Button onClick={ShowData} label="Date Info" />
        </diV>
    )
}

export function Button({label, onClick}){
    return ( <button onClick={onClick} >{label}</button>);
}
function App() {
    return (
        <div>
            <AlertClock />
        </div>
    );
}

// Render the App component instead of the Button component
createRoot(document.getElementById('root')).render(<App />);