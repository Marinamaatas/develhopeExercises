/*# Destructuring assignment

Use the destructuring to make the check of the age easier. Try modifying the parameter of the isAdult function.

Suggestion: look at the official documentation
[ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
*/
function isAdult({ age }) {
    return age >= 18;
  }
  
  const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  };
  
  console.log(isAdult(person));