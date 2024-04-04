import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export function UserList() {
    const [usernames, setUsernames] = useState([]);
    const [newUsername, setNewUsername] = useState("");

    const handleInputChange = (event) => {
        setNewUsername(event.target.value); 
    };

    const addUser = () => {
        if (newUsername.trim() !== "") { // Verificar que el nombre de usuario no esté vacío
            setUsernames([...usernames, newUsername]); // Agregar el nuevo nombre de usuario a la lista
            setNewUsername(""); // Limpiar el input después de agregar el usuario
        }
    };

    return (
        <div>
            <input
                type="text"
                value={newUsername}
                onChange={handleInputChange}
                placeholder="Enter GitHub username"
            />
            <button onClick={addUser}>Add User</button>
            
            <ul>
                {usernames.map((username, index) => (
                    <li key={index}>
                        <GithubUser username={username} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
