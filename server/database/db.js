// require('dotenv').config();
const { Pool } = require('pg');


const RDS_HOSTNAME = process.env.RDS_HOSTNAME || 'localhost';
const RDS_PORT = process.env.RDS_PORT || 5432;
const RDS_DB_NAME = process.env.RDS_DB_NAME || 'ryan'; 
const RDS_USERNAME = process.env.RDS_USERNAME || 'ryan';
const RDS_PASSWORD = process.env.RDS_PASSWORD || 'ryan';

const DATABASE_URL = `postgres://${RDS_USERNAME}:${RDS_PASSWORD}@${RDS_HOSTNAME}:${RDS_PORT}/${RDS_DB_NAME}`;

const pool = new Pool({
  connectionString: DATABASE_URL,
});

  // user: process.env.DB_USER,
  // host: process.env.DB_HOST,
  // database: process.env.DB_NAME,
  // password: process.env.DB_PASSWORD,
  // port: process.env.DB_PORT,

module.exports = pool;

