function printName() {
    let helloName = "Hello John";
  
    function inner() {
      console.log(helloName);
    }
  
    return inner;
  }
  
  const printHelloJohn = printName();
  
  setTimeout(() => {
    printHelloJohn();
  }, 1000);