const obj = {
    propiedad1: "propiedad numero 1",
    propiedad2: "propiedad numero 2",
    propiedad3: "propiedad numero 3",
  };

const fromJStoJSON = JSON.stringify(obj);

console.log(fromJStoJSON)

const fromJSONtoJS = JSON.parse(fromJStoJSON);

console.log(fromJSONtoJS)


function sumar(a, b, ...c) {
    let suma = a + b;
  
    console.log(c);
    c.forEach((numero) => (suma += numero));
  
    return suma;
  }
  
  console.log(sumar(2, 3, 4, "hola"));