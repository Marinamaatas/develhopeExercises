import { useState } from "react";

export default function TestMyToDoList(){
    const [data, setData] = useState([])
    const [inputValue, setInput] = useState('')

    function addTask(){
        if(inputValue.trim() !== ''){
            setData([...data, inputValue])
            setInput('')
        }
    }
    function handleInputChange(event){
        setInput(event.target.value)
    }

    function delateTask(){

    }
    return (
        <div>
            <input type="text" placeholder="Add a task" value={inputValue} onChange={handleInputChange}/>
            <button onClick={addTask}>Add task!</button>
            <ul>
                {setData.map((info, index)=>(
                    <li key={index}>{info}
                    <button onClick={delateTask}>Delete</button>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}