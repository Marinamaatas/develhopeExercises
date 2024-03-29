/*# JSON methods

Convert the `developer` object into json.*/

class Person {
    constructor(id, firstName, lastName, age) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  
  const developer = new Person(1, 'Mario', 'Rossi', 25);
  console.log(developer)
  // Print developer as json object

  
const developerJSON = JSON.stringify(developer);
console.log(developerJSON);