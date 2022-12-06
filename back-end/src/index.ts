import express from "express";
import ENV from "./config/env";

const app = express();
const port = ENV.PORT;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});