/*# Network Requests - Todo List

Using async and await ,implement the necessary code to recover the 
Todos list present in the following URL through an http request: [link](https://jsonplaceholder.typicode.com/todos).*/

async function fetchList(){
    let request = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await request.json();
    console.log(data);
}

fetchList();