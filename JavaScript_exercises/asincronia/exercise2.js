/*# Callback

Write a function called repeatHello which takes a callback as it's parameter. 
The callback function will simply print "Hello". The repeatHello function will
 have to execute the callback function with an interval of 1 second. The callback 
 function must be an arrow function, can you also explain why?

Tips:

- The `setInterval` method will be useful*/

function repeatHello(callback) {
    setInterval(callback, 1000);
}

repeatHello(()=> console.log("Hello"));

/*Al ser tan sencilla la función no es necesario realizarla de forma individual*/