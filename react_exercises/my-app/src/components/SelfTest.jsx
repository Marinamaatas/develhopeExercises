import { useState } from "react"
export default function SelfTest(){
    const [task, setTask] = useState([]);
    const [inputValue, setInputValue] =useState('');

    function addTask(){
        if(inputValue.trim() !== ''){
            setTask([...task, inputValue])
            setInputValue('')
        }
    }

    function handleInputValue(){
        setInputValue(event.target.value)
    }
    return(
        <di>
            <h1>To do list!!</h1>
            <input type="text" placeholder="Add a new task" value={inputValue} onChange={handleInputValue} />
            <button onClick={addTask}>Add!</button>
          <ul>
            {task.map((t, index) =>(
            <li key={index}>{t}</li>
            ) )}
          </ul>
             
        </di>
    )
}