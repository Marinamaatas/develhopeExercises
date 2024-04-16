/* //Escribe una función que tome una matriz de objetos como parámetro. 
Cada objeto tiene una propiedad de "nombre" y una propiedad de "edad".
 La función debería devolver el objeto con mayor edad. */

 const persons = [
    {
      nombre: "Maria",
      edad: 30,
    },
    {
      nombre: "Jose",
      edad: 20,
    },
    {
      nombre: "Marissa",
      edad: 35,
    },
    {
      nombre: "Lorena",
      edad: 14,
    },
    {
      nombre: "Jaime",
      edad: 19,
    },
    {
      nombre: "Manuel",
      edad: 45,
    },
  ];

  function ageChecker(obj){
    obj.sort((a, b) => b.edad - a.edad)
    return obj[0]
  }

  console.log(ageChecker(persons))