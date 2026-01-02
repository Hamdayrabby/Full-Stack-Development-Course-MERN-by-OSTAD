import express from 'express';
import * as taskController from '../app/controllers/taskController.js';

const router = express.Router();

// router.post("/createTask", taskController.createTask);
// router.get("/readTask", taskController.readTask);
// router.put("/updateTask", taskController.updateTask);
// router.delete("/deleteTask", taskController.deleteTask);

router.post("/demo1/:name/:age", taskController.demo1);
router.post("/demo2", taskController.demo2);
router.post("/demo3", taskController.demo3);
router.post("/demo4", taskController.demo4);
router.post("/demo5", taskController.demo5);

export default router;