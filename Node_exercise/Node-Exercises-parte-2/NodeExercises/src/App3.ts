//EXERCISE 2
import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import Joi from 'joi';
import {getAll, getOneById, create, updateById, deleteById} from "./controler/planets"
const app = express();
const port = 2121;


app.use(express.json());
app.use(morgan('dev'));


const planetSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required()
});


app.get("/api/planets", getAll);


app.get("/api/planets/:id", getOneById);


app.post("/api/planets", create);


app.put("/api/planets/:id", updateById);


app.delete("/api/planets/:id", deleteById);

app.listen(port, () => {
    console.log(`You can see this exercise in http://localhost:${port}`);
});
