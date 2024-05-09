"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//EXERCISE 2
var express_1 = require("express");
require("express-async-errors");
var morgan_1 = require("morgan");
var joi_1 = require("joi");
var app = (0, express_1.default)();
var port = 2121;
var planets = [
    { id: 1, name: "Earth" },
    { id: 2, name: "Mars" },
];
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// Joi schema for planet validation
var planetSchema = joi_1.default.object({
    id: joi_1.default.number().required(),
    name: joi_1.default.string().required()
});
// GET all planets
app.get("/api/planets", function (req, res) {
    res.json(planets);
});
// GET planet by id
app.get("/api/planets/:id", function (req, res) {
    var id = req.params.id;
    var planet = planets.find(function (p) { return p.id === Number(id); });
    if (planet) {
        res.json(planet);
    }
    else {
        res.status(404).json({ error: "Planet not found" });
    }
});
// POST create a planet
app.post("/api/planets", function (req, res) {
    var _a = req.body, id = _a.id, name = _a.name;
    var validationResult = planetSchema.validate({ id: id, name: name });
    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.details[0].message });
    }
    var newPlanet = { id: id, name: name };
    planets.push(newPlanet);
    res.status(201).json({ msg: "The planet was created, thanks :)" });
});
// PUT update a planet by id
app.put("/api/planets/:id", function (req, res) {
    var id = req.params.id;
    var name = req.body.name;
    var validationResult = planetSchema.validate({ id: id, name: name });
    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.details[0].message });
    }
    var index = planets.findIndex(function (p) { return p.id === Number(id); });
    if (index !== -1) {
        planets[index].name = name;
        res.status(200).json({ msg: "The planet is updated THANKSSS" });
    }
    else {
        res.status(404).json({ error: "Planet not found" });
    }
});
// DELETE a planet by id
app.delete("/api/planets/:id", function (req, res) {
    var id = req.params.id;
    var index = planets.findIndex(function (p) { return p.id === Number(id); });
    if (index !== -1) {
        planets.splice(index, 1);
        res.status(200).json({ msg: "The planet was deleted." });
    }
    else {
        res.status(404).json({ error: "Planet not found" });
    }
});
app.listen(port, function () {
    console.log("You can see this exercise in http://localhost:".concat(port));
});
