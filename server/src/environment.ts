import dotenv from "dotenv";
import { ormConfig } from "./infotypes/connectiontypes.js";

dotenv.config();

export const ORM_CONFIG: ormConfig = Object.freeze({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: !!(process.env.DB_SYNCHRONIZE ?? false),
});
