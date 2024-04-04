/*import { useEffect, useState, useRef } from "react"
export default function Counter({value}) {
    const referencia =useRef("initialValue")
    let [counter, setCounter] = useState(value)//le pasamos primero la variable y luego el estado que cmabia la variable que le ponemos set + la variable
    useEffect(() => {
        console.log(counter);
        if(counter > value && !referencia.current === "up"){
          console.log("up")
          referencia.current = "up"
        } else if (counter > value && !referencia.current === "down"){
          console.log("down")
          referencia.current = "down"
        }
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
}*/
import React, { useEffect, useState, useRef } from "react";

export default function Counter({ value }) {
   // const referencia = useRef(null);
    const [counter, setCounter] = useState(value);
    useEffect(() => {
      console.log(counter);
    /*  if (counter > value && referencia.current !== "up") {
          console.log("up");
          referencia.current = "up";
      } else if (counter < value && referencia.current !== "down") {
          console.log("down");
          referencia.current = "down";
      }*/
  }, [counter, value]);

   /* useEffect(() => {
        console.log(counter);
        if (counter > value && referencia.current !== "up") {
            console.log("up");
            referencia.current = "up";
        } else if (counter < value && referencia.current !== "down") {
            console.log("down");
            referencia.current = "down";
        }
    }, [counter, value]);*/

    function suma() {
        setCounter((prevCounter) => prevCounter + 1);
    }

    function resta() {
        setCounter((prevCounter) => prevCounter - 1);
    }

    function reset() {
        setCounter(0);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={suma}>+</button>
            <button onClick={resta}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
