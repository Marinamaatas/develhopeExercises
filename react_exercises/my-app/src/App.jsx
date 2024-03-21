import React from 'react' //no es obligatorio importarlo en cada componente hoy en dia
import { Hello } from './components/Hello' //deberia poner el nombre del componente y que cada archivo tenga un componente y conectarla con los imports y exports
import { Welcome } from './components/Welcome'
import Counter from './components/Counter'
import Clock from './components/Clock'
import { MouseClicker } from './components/MouseClicker'
import InteractiveWelcome from './components/InteractiveWelcome'
import Login from './components/Login'

 //sale al escribir rfc

export default function App() {
  return (
    <div>
      <Hello/>
      <Welcome />
      <Counter />
      <Clock />
      <MouseClicker />
      <InteractiveWelcome />
      <Login  onLogin={handleLogin}  />
    </div>
  )
}
