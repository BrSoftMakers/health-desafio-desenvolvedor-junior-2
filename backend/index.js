import express from "express";
import cors from "cors";
import { pool } from "./db";
import petsRoutes from "./routes/pets.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/pets", petsRoutes);

app.get("/pets", async (_req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM pets");
    return res.status(200).send(rows);
  } catch (err) {
    return res.status(400).send(err);
  }
});

app.listen(3333);
