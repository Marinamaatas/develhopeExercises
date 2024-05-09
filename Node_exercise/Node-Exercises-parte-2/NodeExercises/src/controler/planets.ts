import { Request, Response } from "express";
import Joi from 'joi';

type Planet = {
    id: number;
    name: string;
};

type Planets = Planet[];

let planets: Planets = [
    { id: 1, name: "Earth"},
    { id: 2, name: "Mars"},
];

const getAll = (req: Request, res:Response) => {
    res.json(planets);
};
const getOneById = (req: Request, res:Response) => {
    const { id } = req.params;
    const planet = planets.find(p => p.id === Number(id));
    if (planet) {
        res.json(planet);
    } else {
        res.status(404).json({ error: "Planet not found" });
    }
};
const create = (req: Request, res:Response)=> {
    const { id, name } = req.body;

    const validationResult = planetSchema.validate({ id, name });
    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.details[0].message });
    }

    const newPlanet: Planet = { id, name };
    planets.push(newPlanet);

    res.status(201).json({ msg: "The planet was created, thanks :)" });
}
const updateById = (req: Request, res:Response) => {
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
}
const deleteById = (req: Request, res:Response) => {
    const { id } = req.params;

    const index = planets.findIndex(p => p.id === Number(id));
    if (index !== -1) {
        planets.splice(index, 1);
        res.status(200).json({ msg: "The planet was deleted." });
    } else {
        res.status(404).json({ error: "Planet not found" });
    }
}

export {getAll, getOneById, create, updateById, deleteById}