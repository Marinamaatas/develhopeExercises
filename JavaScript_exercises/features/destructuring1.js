/*# Destructuring

Use the destructuring, instead of a temporary variable, to swap the values of the variables.

**Suggestion:** look at the official documentation 
[<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)*/

/*let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
let temp = num2;
num2 = num1;
num1 = temp;

console.log('After swap: ', num1, num2); // After swap: 20 10*/

let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); 

[num1, num2] = [num2, num1];

console.log('After swap: ', num1, num2); 