/*import React, { useState } from "react";

export function GithubUser() {
    const [username, setUsername] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchData = () => {
        setLoading(true);
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (response.status !== 200)
                throw new Error("User not found");
            return response.json();
        })
        .then(json => {
            setData(json);
        })
        .catch(error => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter GitHub username"
            />
            <button onClick={fetchData}>Load</button> {}
            <div>
            {loading && <h3>Loading...</h3>}
            {data && <h3>{data.name}</h3>}
            {data && <h3>{data.login}</h3>}
            {data && <img src={data.avatar_url}/>}
            {error && <h3>An error is found</h3>}
            </div>
        </div>
    );
}*/

import React, { useState, useEffect } from "react";

export default function GithubUser({ username }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (response.status !== 200)
                    throw new Error("User not found");
                return response.json();
            })
            .then(json => {
                setData(json);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [username]);

    return (
        <div>
            <h3>{loading && "Loading..."}</h3>
            {data && (
                <div>
                    <h3>{data.name}</h3>
                    <h3>{data.login}</h3>
                    <img src={data.avatar_url} alt="User avatar" />
                </div>
            )}
            {error && <h3>{error.message}</h3>}
        </div>
    );
}

