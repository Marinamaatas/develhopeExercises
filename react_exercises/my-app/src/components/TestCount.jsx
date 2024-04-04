import { useState } from "react";
export default function TestCount({value}){
    const [counter, setCounter] = useState(value)

    function suma (){
        setCounter(counter)
        setCounter((preCounter)=>{
            return preCounter + 1
        })
    }

    function resta(){
        setCounter(counter)
        setCounter((preCounter) => {
            return preCounter - 1
        })
    }

    function reset(){
        setCounter(counter)
        setCounter(() =>{
            return value
        })
    }

    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={suma}>+</button>
            <button onClick={resta}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}