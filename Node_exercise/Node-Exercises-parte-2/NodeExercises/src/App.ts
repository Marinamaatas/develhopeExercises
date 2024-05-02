import express from 'express'
import 'dotenv/config' //puedo utilizar las variables de entorno en mi aplicación
import morgan from 'morgan'

const PortApp = process.env.PORT //asi accedo a la variable port del .env
const Server = express()
Server.use(express.json()) //
Server.use(morgan("dev")) //depende de la opcion que eligas te muestra por consola un tipo de datos u otro
Server.get("/", ((req, res)=>(
    res.send("Hola!!")
)))
Server.listen(PortApp, (()=> console.log("Se ha levantado el servidor correctamente")))
