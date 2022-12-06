import express from "express";
import ENV from "./config/env";
import BaseRoutes from "./routes";

const app = express();
const port = ENV.PORT;

app.use(BaseRoutes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
