import { useState } from "react";
export default function SelfTest2 (){
const [tasks, setTasks] = useState([])
const [inputValue, setInputValue] = useState('')
    function addTask(){
        
        if(inputValue.trim() !== ''){
            setTasks([...tasks, inputValue])
            setInputValue('')
        }
    }
    function inputChanging(event){
        setInputValue(event.target.value)
    }
    return (
        <div>
            <h1>Create your own To Do List!</h1>
            <input type="text" placeholder="Add your task" value={inputValue} onChange={inputChanging} />
            <button onClick={addTask}>Add!</button>
            <ul>
                {
                    tasks.map((task, index)=>(
                        <li key={index}>{task}</li>
                    ))
                }
            </ul>
        </div>
    )
}