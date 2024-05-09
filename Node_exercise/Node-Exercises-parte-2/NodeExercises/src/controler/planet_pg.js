const express = require("express");
const Joi = require('joi');
const pgPromise = require("pg-promise");

const app = express();
const PORT = 3000;


const db = pgPromise()("postgres://postgres:123456789@localhost:5432/video");


app.use(express.json());


const planetSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required()
});


const setupDb = async () => {
    try {
        await db.none(`
            DROP TABLE IF EXISTS planets;

            CREATE TABLE planets(
                id SERIAL NOT NULL PRIMARY KEY,
                name TEXT NOT NULL
            );

            INSERT INTO planets (name) VALUES ('Earth'), ('Mars');
        `);
        console.log('Planets table created and populated.');
    } catch (error) {
        console.error('Error setting up database:', error);
    }
};


const getAll = async (req, res) => {
    try {
        const planets = await db.many('SELECT * FROM planets;');
        res.status(200).json(planets);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getOneById = async (req, res) => {
    const { id } = req.params;
    try {
        const planet = await db.$cn.one(`SELECT * FROM planets WHERE id=$1`, Number(id));
        res.status(200).json(planet);
    } catch (error) {
        res.status(404).json({ error: "Planet not found" });
    }
};

const create = async (req, res) => {
    const { name } = req.body;
    const newPlanet = { name };

    const validationResult = planetSchema.validate(newPlanet);
    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.details[0].message });
    }

    try {
        await db.none(`INSERT INTO planets (name) VALUES ($1)`, name);
        res.status(201).json({ msg: "The planet was created, thanks :)" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateById = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        await db.none('UPDATE planets SET name=$2 WHERE id=$1', [id, name]);
        res.status(200).json({ msg: "The planet is updated THANKSSS" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const deleteById = async (req, res) => {
    const { id } = req.params;

    try {
        await db.none('DELETE FROM planets WHERE id=$1', id);
        res.status(200).json({ msg: "The planet was deleted." });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

app.get("/planets", getAll);
app.get("/planets/:id", getOneById);
app.post("/planets", create);
app.put("/planets/:id", updateById);
app.delete("/planets/:id", deleteById);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


setupDb();
