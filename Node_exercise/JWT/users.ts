import { Request, Response } from "express";
import * as dotenv from 'dotenv';
dotenv.config();
import { db } from "./db";
import jwt from "jsonwebtoken";

const logIn = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user = await db.one(`SELECT * FROM users WHERE username=$1`, username);

        if (user && user.password === password) {
            const payload = {
                id: user.id,
                username,
            };
            const { SECRET = "" } = process.env;
            const token = jwt.sign(payload, SECRET);

            res.status(200).json({ id: user.id, username, token });
        } else {
            res.status(400).json({ msg: "Username or password incorrect." });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal server error." });
    }
};

const signUp = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const existingUser = await db.oneOrNone(`SELECT * FROM users WHERE username=$1`, username);

        if (existingUser) {
            res.status(409).json({ msg: "Username already in use." });
        } else {
            const { id } = await db.one(
                `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`,
                [username, password]
            );
            res.status(201).json({ id, msg: "User created successfully. Now you can log in." });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal server error." });
    }
};
const logOut = async (req: Request, res: Response) => {
    const user: any = req.user;
    try {
        await db.none(`UPDATE users SET token=NULL WHERE id=$1`, [user?.id]);
        res.status(200).json({ msg: "Logout successful." });
    } catch (error) {
        console.error("Error logging out:", error);
        res.status(500).json({ msg: "Internal server error." });
    }
};
export { logIn, signUp, logOut };
