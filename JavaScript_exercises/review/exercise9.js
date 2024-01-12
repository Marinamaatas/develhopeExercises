const person = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  }
  
  // Print values of person using Object.keys

 /* Create an object `person`. Print its
   key/value pair in the console. Try to use the method `Object.kyes`:*/


function printObject(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = obj[key];
      console.log(`${key}: ${value}`);
    }
  }
  printObject(person);

