import React, { useState, useEffect } from "react";
export default function GithubUser(username) {
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
    return {data, loading, error}
}