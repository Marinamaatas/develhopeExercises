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
    function handleLogin() {
		console.log(data)

		onLogin(data)
	}

    return (
        <div>
            <h1>Iniciar sesión</h1>
            <p>User name</p>
            <input name= "username" value={data.username} onChange={infoChange} />
            <p>Password</p>
            <input name="password" type="password"  onChange={infoChange}/>
            <p>Remember me</p>
            <input name="remember" type="checkbox" checked={data.remember} onChange={infoChange} />
            <br />
            <button disabled={!data.username || !data.password}  onClick={handleLogin}>Log in</button>
        </div>
    )
}