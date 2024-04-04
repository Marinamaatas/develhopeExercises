import { useEffect, useRef  } from "react"


export default function FocusableInput(){
    const mountedRef = useRef(false)
    const refInput = useRef(null) //lo podemos inicializar como queremos pero se recomienda con null para cuando trabajemos con Typescript
    useEffect(() =>{
        if(!mountedRef.current){
            mountedRef.current = true
            console.log("First time!!")
        }
        refInput.current?.focus() //llama al método focus() del objeto refInput.current si refInput.current no es nulo, de lo contrario, no hagas nada
    }, [])
    return(
        <div>
            <p>Username</p>
            <input ref={refInput}/>
        </div>
    )
}