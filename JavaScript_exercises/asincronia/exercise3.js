/*# Callback

Starting from the previous exercise, we want to add to our function `repeatHello`,
a `clearInterval` after 5 seconds, could you do that?

Tips:

- The `setInterval` and `setTimeout` methods will be useful*/

function repeatHello(callback) {
    let time = setInterval(callback, 1000);
    setTimeout(()=>clearInterval(time), 5000)
}

repeatHello(()=> console.log("Hello"));