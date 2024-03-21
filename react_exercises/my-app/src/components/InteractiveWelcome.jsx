
import { useState } from "react"
export function Welcome({ name }) {
	return <p>Hello, {name}!</p>
}

export default function  InteractiveWelcome(){
    const [name, setName] = useState('')

    function handleName(event){
        setName(event.target.value)
    }
    //htmlFor is used in JSX to associate a label with an input element. This attribute is equivalent to the for attribute in HTML.
    return(
        <div>
            <label htmlFor="nameInput">Enter your name</label>
            <input 
            type="text"
            id="nameInput"
            value={name}
            onChange={handleName}
            />
            <Welcome name={name} />
        </div>
    )

}