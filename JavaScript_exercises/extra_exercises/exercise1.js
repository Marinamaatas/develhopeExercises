/* 
En este ejercicio tienes que comprobar el array proporcionado (array) 
en busca de ideas buenas 'good' e ideas malas 'bad'. 
Si hay una o dos ideas buenas, devuelve 'Bien!', 
si hay más de 2 devuelve 'Perfecto!'. 
Si no hay buenas ideas, como suele ser el caso, devuelve "Mal!".
*/

const test1 = ["bad", "bad", "bad"];
const test2 = ["good", "bad", "bad", "bad", "bad", "good"];
const test3 = ["good", "bad", "bad", "good", "bad", "good"];

function comprobarIdeas(array) {
    let counter = 0;
    array.forEach(element => {
        if(element === "good")
            counter++;
    });
    if (counter === 0)
        return ("Mal!")
    else if (counter <= 2)
        return ("Bien!")
    else if (counter > 2)
        return ("Perfecto!")
    else 
        return ("Puntuación no valida.")
}

console.log(comprobarIdeas(test1)); // "Mal!"
console.log(comprobarIdeas(test2)); // "Bien!"
console.log(comprobarIdeas(test3)); // "Perfecto!"