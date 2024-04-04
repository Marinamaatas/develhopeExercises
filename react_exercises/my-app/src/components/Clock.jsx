import { useContext, useEffect, useState } from "react"
import "../styles/clock.scss";
import { LanguageContext } from "./LanguageContext";
export default function Clock() {
  const [time, setTime] = useState(new Date());//el primer argumento es el estado inicial (Date). useState devuelve por un lado time (el estado actual) y setTime(una funcion para actualizar el estado)

  useEffect(() => {
    const intervalID = setInterval(() => { //setInterval ya esta predefinido por JS y nos permite actualizar Data cada segundo
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID); //es una función nativa de JavaScript. Se utiliza para parar el intervalo creado por setInterval()
    };
  }, []); 
  const language =useContext(LanguageContext)
  return (
    <div className="clockContainer">
      <h2>{language ==="en" ? "Current Time: " : "Hora actual: "}{time.toLocaleTimeString()}</h2>
    </div>
  );
}

