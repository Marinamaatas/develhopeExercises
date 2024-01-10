/*# Closures

Write a new `closure`: create a function called `multiplyByTwo` that takes in one parameter.
Inside the `multiplyByTwo` function, create a function called `inner`. This function will take care of multiplying the parameter passed as input and multiply it by the variable named `number`
Print in the console the function output.

Example: `multiplyByTwo(4)()`, result: `8`

Tips:

- You can learn more about this topic checking this article: https://www.freecodecamp.org/news/closures-in-javascript/
*/
function multiplyByTwo(value) {
    let number = 2;
    function inner() {
    let result = value * number;
    console.log(result)
    }
    return inner;
  }
  
  const multipliedValue = multiplyByTwo(5);
  multipliedValue();