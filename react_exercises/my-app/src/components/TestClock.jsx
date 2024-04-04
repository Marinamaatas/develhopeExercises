import {useState, useEffect} from 'react'

export default function TestClock(){
    const [time, setTime] =useState(new Date())

    useEffect(() =>{
        const timeID = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return (()=>
        clearInterval(timeID)
        )
    }
    )
    return (
        <div>
            <h2>What time is it? It is {time.toLocaleTimeString()}</h2>
        </div>
    )
}