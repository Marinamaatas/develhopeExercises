// Destructuring con arrays
const numeros = [12, 2, 3];

// Sin destructuring
let numeroUno = numeros[0];
let numeroDos = numeros[1];
let numeroTres = numeros[2];

console.log(numeroUno);
numeroUno = 12;
console.log(numeros[0]);

let [uno, tres] = numeros;

console.log(uno, tres);

uno = 9;

console.log(numeros);

// Destructuring con objetos
const persona = {
  nombre: "Juan",
  apellido: "Gomez",
  edad: 25,
};

// Sin destructuring
/*const nombrePersona = persona.nombre;
const apellidoPersona = persona.apellido;
const edadPersona = persona.edad;*/

const {nombre, apellido, edad} = persona;

console.log (nombre);


