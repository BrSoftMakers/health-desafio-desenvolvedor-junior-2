import pkg from 'pg';
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config()


export const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});
