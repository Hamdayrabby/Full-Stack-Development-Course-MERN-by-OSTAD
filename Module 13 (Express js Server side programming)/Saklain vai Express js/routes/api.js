import express from "express";
import * as taskController from "../controllers/taskController.js";

const router = express.Router();

router.post("/createTask",taskController.createTask);

router.get("/readTask",taskController.readTask);

router.put("/updateTask",taskController.updateTask);

router.delete("/deleteTask",taskController.deleteTask);

export default router;