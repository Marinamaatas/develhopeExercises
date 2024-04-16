import {useState } from 'react'
import FetchSolicitor from './PokeApifetch';

export default function PokeApiResult(){
    const [pokedata, setPokedata] = useState([])
    const [inputvalue, setInputvalue] = useState("")
    function addPokemon(){
        if(inputvalue.trim() !== ''){
            setPokedata([...pokedata, inputvalue])
            setInputvalue('')
        }
    }
    function handlePokemon(event){
        setInputvalue(event.target.value)
    }

    return(
        <div>
            <input type="text" placeholder="Write a pokemon" onChange={handlePokemon} value={inputvalue}/>
            <button onClick={addPokemon}>Send your pokemon!</button>
            <ul>
                {pokedata.map((poke, index) => (
                    <li key={index}><FetchSolicitor pokemon={poke}/></li>
                ))}
            </ul>
        </div>
    )
}
