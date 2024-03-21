import { useEffect, useState } from "react"
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

  return (
    <div>
      <h2>Current Time: {time.toLocaleTimeString()}</h2>
   
    </div>
  );
}

