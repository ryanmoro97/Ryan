const projects = require('./projects.json');
const pool = require('./db');

const deleteProjectsTable = async () => {
    try {
        await pool.query(`
        DROP TABLE IF EXISTS projects
        `);
        console.log('projects table deleted');
    } catch (err) {
        console.error(err);
    }
};

const createProjectsTable = async () => {
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS projects (
            id SERIAL PRIMARY KEY,
            name TEXT,
            image TEXT,
            description TEXT,
            tools TEXT,
            link TEXT)
        `);
        console.log('projects table created');
    } catch (error) {
        console.error(error);
    }
};


const insertProjectsData = async () => {
    try {
        const values = projects.map((project) => `(${project.id}, '${project.name}', '${project.image}', '${project.description}', '${project.tools}', '${project.link}')`).join(',');
        await pool.query(`
        INSERT INTO projects (id, name, image, description, tools, link)
        VALUES 
            ${values}
        `);
        console.log('projects values inserted');
    }   
    catch (err) {
        console.error(err);
    }
};

const setupDatabase = async () => {
     await deleteProjectsTable();
     await createProjectsTable();
     await insertProjectsData();
     pool.end();
};

setupDatabase();
