
import styles from '../styles/container.module.scss';
import { useState } from "react"
export default function Container({ title, children }) {
    const [collapse, setCollapse] = useState(false)
 function handleDesplegable(){
    setCollapse(t => !t) //Devuelve el mismo valor cambiado
 }
 
    return (
    <div className={styles.container}>
        <div>{title}<button onClick={handleDesplegable}>Desplegable</button></div>
    {!collapse &&  <div>{children}</div> }
    </div>
  );
}

