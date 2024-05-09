const express = require("express");
const Joi = require('joi');
const pgPromise = require("pg-promise");
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

const db = pgPromise()("postgres://postgres:123456789@localhost:5432/video");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

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
                name TEXT NOT NULL,
                image TEXT
            );

            INSERT INTO planets (name) VALUES ('Earth'), ('Mars');
        `);
        console.log('Planets table created and populated.');
    } catch (error) {
        console.error('Error setting up database:', error);
    }
};

app.post("/planets/:id/image", upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const fileName = req.file?.path;
    if (fileName) {
        try {
            await db.none('UPDATE planets SET image=$2 WHERE id=$1', [id, fileName]);
            res.status(201).json({ msg: "Planet image updated successfully" });
        } catch (error) {
            console.error('Error updating image:', error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(400).json({ msg: "Image not updated" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

setupDb();
