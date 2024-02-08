/*# Promise errors

Starting from the previous exercise, try to better handle all errors through 
the `Error` class and the `catch` method. Also add the `finally` method.

Tips:

- Error documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error*/

const isLogged = true;

const promesa = new Promise((resolve, reject) => {
    isLogged ? resolve(Math.random()) : reject ("Error")
})

function promesa2 (number) {
    return new Promise((resolve, reject) => {
        if (typeof number === "number" && number >= 0.5) 
        resolve({name: "John", age: 24})
    else
        reject(`Error: el número ${number} es menos a 0.5`)
    })
   
}

promesa
    .then((number) => promesa2(number))
    .then((user) => console.log(user))
    .catch((error) => console.error(error))
    .finally(() => console.info("The promise has finished"))