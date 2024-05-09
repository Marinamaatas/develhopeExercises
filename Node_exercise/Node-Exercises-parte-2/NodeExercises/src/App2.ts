//EXERCISE 2
import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import Joi from 'joi';

const app = express();
const port = 2121;

type Planet = {
    id: number;
    name: string;
};

type Planets = Planet[];

let planets: Planets = [
    { id: 1, name: "Earth"},
    { id: 2, name: "Mars"},
];

app.use(express.json());
app.use(morgan('dev'));


const planetSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required()
});


app.get("/api/planets", (req, res) => {
    res.json(planets);
});


app.get("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    const planet = planets.find(p => p.id === Number(id));
    if (planet) {
        res.json(planet);
    } else {
        res.status(404).json({ error: "Planet not found" });
    }
});


app.post("/api/planets", (req, res)=> {
    const { id, name } = req.body;

    const validationResult = planetSchema.validate({ id, name });
    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.details[0].message });
    }

    const newPlanet: Planet = { id, name };
    planets.push(newPlanet);

    res.status(201).json({ msg: "The planet was created, thanks :)" });
});


app.put("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const validationResult = planetSchema.validate({ id, name });
    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.details[0].message });
    }

    const index = planets.findIndex(p => p.id === Number(id));
    if (index !== -1) {
        planets[index].name = name;
        res.status(200).json({ msg: "The planet is updated THANKSSS" });
    } else {
        res.status(404).json({ error: "Planet not found" });
    }
});


app.delete("/api/planets/:id", (req, res) => {
    const { id } = req.params;

    const index = planets.findIndex(p => p.id === Number(id));
    if (index !== -1) {
        planets.splice(index, 1);
        res.status(200).json({ msg: "The planet was deleted." });
    } else {
        res.status(404).json({ error: "Planet not found" });
    }
});

app.listen(port, () => {
    console.log(`You can see this exercise in http://localhost:${port}`);
});
