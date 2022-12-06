import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});