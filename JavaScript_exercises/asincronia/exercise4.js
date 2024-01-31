/*# Promise

Write a `promise`. If the variable called `number` is greater than 10, 
then it returns a resolve, otherwise it returns a reject.
Then manage the promise with `then` and `catch` in case of any reject.*/

const number = 15;

/*function numberPromise(){
    return new Promise((resolve, reject) => {
        if(number > 9)
            resolve(number)
        else
            reject("El número es menor a 10")
    })
}*/
const numberPromise = new Promise((resolve, reject) => {
        if(number > 9)
            resolve(number)
        else
            reject("El número es menor a 10")
    })

numberPromise
    .then((number) => console.log(number))
    .catch((reject) => console.log(reject))