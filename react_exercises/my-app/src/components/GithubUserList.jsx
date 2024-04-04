import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import GithubUser from "./useGithubUser";
import useSWR from "swr";

export default function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
        {users.length && (
            <ul data-testid='users'>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/githubuserlist/${user.login}`}>{user.login}</Link>
                    </li>
                ))}
            </ul>
        )}

        <Outlet />
    </div>
);
}