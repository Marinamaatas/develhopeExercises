import { useEffect, useState } from 'react';
export default function FetchSolicitor({pokemon}){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(response => {
                if (!response.ok)
                    throw new Error("Pokemon not found");
                return response.json();
            })
            .then(datitos => {
                setData(datitos);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [pokemon]);
    
    return (
        <div>
            {loading && <h3>Loading...</h3>}
            {error && <h3>error.message</h3>}
            {data && <div>
                <h3>{data.forms[0].name}</h3>
                <img src={data.sprites.front_default} alt="Pokemon's picture"/>
                </div>}
        </div>
    )
}