/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumPar(n){
    let solution = 0
    n.forEach(element => {
        if(element % 2 === 0)
        solution += element
    });
    return solution
}

console.log(sumPar(numeros))*/

/*const people = [
    { name: "Mario", age: 32 },
    { name: "Luigi", age: 28 },
    { name: "Peach", age: 29 },
    { name: "Toad", age: 35 },
  ];

function elder(people){
    people.sort((a, b) => b.age - a.age)
    return people[0]
}

console.log(elder(people))*/

//'https://api.github.com/users/' + user + '/repos'

/*function fetchExercise(user){
    let url = 'https://api.github.com/users/' + user + '/repos'
    return fetch(url)
    .then((response)=>{
        if (response.ok)
            return response.json()
        throw new error ("Error al realizar el fetch")
    })
    .then((data)=>{
        let result = []
        data.forEach(element => {
            result.push(element.name)
        });
        return result
    })
    .catch((error)=>{
        console.log("Error:", error)
    })
}

 fetchExercise("google")
.then((response)=>{
    console.log(response)
})*/

/*const strings = ["casa", "arbol", "libro", "auto", "periodico"];

function arrayWithA(arr){
    let solution = []
    arr.forEach(element => {
        if (element.includes("a"))
            solution.push(element)
    });
    return solution
}

console.log(arrayWithA(strings))*/

const person = {
    nombre: "Mario",
    apellido: "Rossi",
    edad: 32,
    profesion: "Programador",
  };

  function ordenPerson(person){
    let solution = Object.keys(person)
    let newObject = {}
    let sortedSolution = solution.sort()
    sortedSolution.forEach(element =>{
        newObject[element]= person[element]
    })
    return newObject
  }

  console.log(ordenPerson(person))