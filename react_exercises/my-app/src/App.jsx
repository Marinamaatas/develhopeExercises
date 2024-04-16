import React from 'react';
import SelfTest2 from './components/SelfTest2';
import TestClock from './components/TestClock';
import TestCount from './components/TestCount';
import PokeApiResult from './components/PokeApiExercise';
import Login from './components/Login';

export default function App() {
  const handleLogin = (state) => {
    console.log('Login state:', state);
  };
  return (
  <div>
      <SelfTest2 />
      <TestClock />
      <TestCount value={21}/>
      <PokeApiResult />
      <Login  onLogin={handleLogin}  />
  </div>
   
  );
      
}     

  /*




  
import { BrowserRouter, Link, Route ,  Routes, useParams} from 'react-router-dom';
import { Welcome } from './components/Welcome'
import Counter from './components/Counter'
import ShowGithubUser from './components/ShowGithubUser';
import ErrorSearch from './components/ErrorSearch';
import GithubUserList from './components/GithubUserList';
    <BrowserRouter>
    <Link to="/">Home </Link>
    <Link to="/counter">Counter </Link>
    <Link to="/GithubUserList">User Github </Link>

  <Routes>
      <Route path="/" element={<Welcome name="Marina" age={26}/>}/>
      <Route path="/counter" element={<Counter value={0}/>}/>
      <Route path="/GithubUserList" element={<GithubUserList />}>
        <Route index element ={<p>Add a user and select it</p>} />
        <Route path=":username" element={<ShowGithubUser />} />
      </Route>
      <Route path="*"  element={<ErrorSearch />} />
    </Routes>
    </BrowserRouter>
  
  
  
  
  
  const [language, setLanguage] = useState("en")
import ShowGithubUser from "./components/ShowGithubUser"
function handleSetLanguage(language){
  setLanguage(language)
} <Route path="user/:username" element={<ShowGithubUser />}/>
  const handleLogin = (state) => {
    console.log('Login state:', state);
        <button onClick={() => handleSetLanguage("en")}>EN</button>
    <button  onClick={() => handleSetLanguage("es")}>ES</button>
    <LanguageContext.Provider value={language}>
      <Clock />
    </LanguageContext.Provider>
     
  };
*/
/*import React from 'react' //no es obligatorio importarlo en cada componente hoy en dia
import { Hello } from './components/Hello' //deberia poner el nombre del componente y que cada archivo tenga un componente y conectarla con los imports y exports

import { LanguageContext } from './components/LanguageContext';
import Clock from './components/Clock'
import Counter from './components/Counter'
import TodoList from './components/TodoList';
import Clock from './components/Clock'
import { MouseClicker } from './components/MouseClicker'
import InteractiveWelcome from './components/InteractiveWelcome'
import Login from './components/Login'
import Login from './components/Login'
import UncontrolledFunction from './components/UncontrolledLogin';

 //sale al escribir rfc

export default function App() {
  return (
    <div>
    
      <FocusableInput />
      <Hello/>
        <Container title={<h1>This is the title</h1>}>
       <TodoList />
       </Container>
      <Counter />
     
      <MouseClicker />
      <InteractiveWelcome />
      <Login  />
       <Login onLogin={handleLogin} />
      <UncontrolledFunction />
    </div>
  )
}*/
