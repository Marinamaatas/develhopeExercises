import { useState } from "react"

export default function Login({ onLogin }){
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
})

    function infoChange(event){
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;

        setData ((data) => { //Se crea una copia y se actualiza el valor de data 
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }
    const handleLogin = (event) => {
        event.preventDefault();
        onLogin(data);
      };

    function handleResetButton(){
        setData({
            username: '',
            password: '',
            remember: false,
    })
    }

    return (
        <div>
           
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleLogin}>
            <p>User name</p>
            <input name= "username" value={data.username} onChange={infoChange} />
            <p>Password</p>
            <input name="password" type="password"  onChange={infoChange}/>
            <p>Remember me</p>
            <input name="remember" type="checkbox" checked={data.remember} onChange={infoChange} />
            <br />
            <button disabled={!data.username || !data.password}>Log in</button>
            <button onClick={handleResetButton}>Reset</button>
            </form>
        </div>
    )
}