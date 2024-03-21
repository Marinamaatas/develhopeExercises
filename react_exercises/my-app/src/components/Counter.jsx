import { useEffect, useState } from "react"
export default function Counter() {
    let [counter, setCounter] = useState(0)//le pasamos primero la variable y luego el estado que cmabia la variable que le ponemos set + la variable
    useEffect(() => {
        console.log(counter);
      }, [counter]);
    function suma(){
    setCounter(counter);
    setCounter((preCounter)=>{
        return preCounter + 1
    });
  }
function resta(){
    setCounter(counter);
    setCounter((preCounter)=>{
        return preCounter - 1
    });
  }
  function reset(){
    setCounter(counter);
    setCounter(()=>{
        return 0
    });
  }
    return (
    <div>
      <h2>{counter}</h2>
      <button onClick={suma}>+</button>
     <button onClick={resta}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
