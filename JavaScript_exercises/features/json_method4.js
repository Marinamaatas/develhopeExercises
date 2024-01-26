/*# JSON methods

In this exercise we need to filter the properties of the object person in order 
to convert just the id and age values into JSON.*/

const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
  };
  
const json = JSON.stringify(person, (key, value) => {
  // Only include 'id' and 'age' properties in the JSON
  if (key === 'id' || key === 'age') {
    return value;
  }
  // Include a custom string for other properties
  return `Information not found for ${key}`;
});

console.log(json);

  
  console.log(json); // Should return: { id: 1, age: 25 }
