import { useParams } from "react-router-dom"; //trae los parametros de la URL 
import GithubUser from "./GithubUser.jsx"
export default function ShowGithubUser(){
const {username} = useParams() //al devolver un oobjeto tengo que decontruirlo utilizando las llaves con el mismo nombre que la URL
return (
    <div>
        <GithubUser username={username}/>
    </div>
)
}