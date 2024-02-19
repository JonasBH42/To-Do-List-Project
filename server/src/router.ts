import Router from "express";
import { insertTask, updateTask, deleteTask, getNotes } from "./controller.js";

export const router = Router();

router
  .route("/insertTask")
  .post(insertTask)
  .get(getNotes)
  .put(updateTask)
  .delete(deleteTask);
