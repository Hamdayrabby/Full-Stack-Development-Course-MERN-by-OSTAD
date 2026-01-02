import express from "express";
import cors from "cors";
import { PORT } from "./config/config.js";
import mongoose from "mongoose";
import hpp from "hpp";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import router from "./routes/api.js";
import rateLimit from "express-rate-limit";
import { REQUEST_LIMIT_NUMBER } from "./config/config.js";
import { REQUEST_LIMIT_TIME } from "./config/config.js";

const app = express();
const limiter = rateLimit({
    windowMs: REQUEST_LIMIT_TIME,
    max: REQUEST_LIMIT_NUMBER,
});

app.use(express.json());
app.use(hpp());
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(limiter);
app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
