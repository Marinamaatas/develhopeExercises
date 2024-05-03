const fs = require('fs');
const textToWrite = "Hola Mundo, que tal?"
fs.writeFile('text.txt', textToWrite, (error) => {
    if(error) {
        console.error("Error-drama", error)
        return;
    }
    console.log("Se ha escrito el mensaje en text.txt")
});
