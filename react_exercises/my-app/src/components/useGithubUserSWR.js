import useSWR from "swr";

const fetcher = url => fetch(url).then(response => response.json());

export default function GithubUser(username) {
    if (!username) {
        throw new Error("Username not found");
    }
    
    const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`, fetcher);
    function refreshUSer(){
        mutate()
    }
    return {
        user: data,
        error,
        loading: !data && !error,
        onRefresh: refreshUSer,
    };
}


