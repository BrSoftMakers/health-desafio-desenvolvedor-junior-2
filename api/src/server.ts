import "reflect-metadata";
import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "./routes/routes";

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
