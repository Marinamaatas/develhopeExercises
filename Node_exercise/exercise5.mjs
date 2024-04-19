//al ser un archivo .mjs se puede usar el import, si es .js sería con el require
import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    "<html><body><h1>I am learning Node!</h1></body></html>"
  );
});

server.listen(3000, () => { //pides que se ejecute el servidor en el puerto 3000 y quieres que salga por consola ese mensaje cuando se ejecute correctamente
  console.log(`Server running at http://localhost:3000`);
});
