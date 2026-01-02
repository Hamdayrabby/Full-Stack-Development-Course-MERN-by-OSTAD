import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import {PORT, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIME} from "./app/config/config.js";
import router from "./routes/api.js";
import hpp from "hpp";
import mongoose from "mongoose";

const app = express();
const limiter = rateLimit({
    windowMs: REQUEST_LIMIT_TIME, // 15 minutes
    max: REQUEST_LIMIT_NUMBER // limit each IP to 100 requests per windowMs
});


app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(limiter); 
app.use("/api",router);
app.use(express.json());
app.use(hpp());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 