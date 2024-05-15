import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:123456789@localhost:5432/video");

const setupDb = async () => {
    try {
        await db.none(`
            DROP TABLE IF EXISTS users;

            CREATE TABLE users (
                id SERIAL NOT NULL PRIMARY KEY,
                username TEXT NOT NULL,
                password TEXT NOT NULL,
                token TEXT
            );

            INSERT INTO users (username, password) VALUES ('Dummy', 'password'), ('dummy', 'password');
        `);
        console.log('Users table created and populated.');
    } catch (error) {
        console.error('Error setting up database:', error);
    }
};

setupDb();

export { db };