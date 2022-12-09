import pkg from 'pg';
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config()


export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});
