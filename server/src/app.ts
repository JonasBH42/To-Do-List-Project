import cors from "cors";
import express, { json } from "express";
import { initializeORM } from "./ORM.js";
import { router } from "./router.js";

const app = express();
const api = express.Router();
const port = 5000;

const corsConfig = {
  origin: "http://localhost:3000",
  credentials: true,
};

api.use(cors(corsConfig)).use(json()).use(router);
app.use("/api", api);

initializeORM().then(async () => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});
