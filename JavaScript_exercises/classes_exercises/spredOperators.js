const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const array3 = [...array1, ...array2];


const persona2 = {
    nombre: "Juan",
    apellido: "Gomez",
    edad: 25,
};

const { nombre: name, ...other } = persona2;
console.log(name, other);


const arrayNumeros = [1, 2, 3, 4, 5];
const [one, two, three, ...others] = arrayNumeros;
console.log(one, two, three, others);