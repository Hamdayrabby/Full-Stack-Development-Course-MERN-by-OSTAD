import express from "express";
import * as controller from "../controllers/controller.js";

const router = express.Router();

router.get("/Hello",controller.Hello);

router.get("/GetJson",controller.GetJson);

router.post("/PostRequest",controller.PostRequest);

export default router;