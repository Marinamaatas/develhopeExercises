import * as dotenv from 'dotenv';
import { Passport } from 'passport';
import passportJWT from 'passport-jwt';
import { db } from './db.ts';

dotenv.config();

const { SECRET } = process.env;

const passport = new Passport();

passport.use(
    new passportJWT.Strategy({
        secretOrKey: SECRET,
        jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    }, async (payload, done) => {
        try {
            const user = await db.one(`SELECT * FROM users WHERE id=$1`, payload.id);
            console.log(user);
            return user ? done(null, user) : done(new Error("User not found"));
        } catch (error) {
            return done(error);
        }
    })
);

export default passport;