import express from "express";
import cors from "cors";
import router from "./routes/api.js";
import {PORT} from "./config/config.js";
import mongoose from "mongoose";
import helmet from "helmet";
import hpp from "hpp";
import cookieParser from "cookie-parser";

const app = express();
const limiter = rateLimit({
  windowMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
});


app.use(helmet());
app.use(hpp());
app.use(cors());
app.use(express.json());
app.use(limiter);
app.use("/api", router);

app.listen(PORT, () => {    
  console.log(`Server is running on port ${PORT}`);
});

