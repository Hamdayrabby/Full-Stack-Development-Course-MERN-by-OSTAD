import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import expressRateLimit from "express-rate-limit";
import jsonWebToken from "jsonwebtoken";
import cookieParser from "cookie-parser";
import nodemailer from "nodemailer";
import  nodemon from "nodemon";
import routes from "./routes/api.js";
import helmet from "helmet";
import { DATABASE,MAX_JSON_SIZE,PORT,REQUEST_TIME,REQUEST_NUMBER,URL_ENCODE,WEB_CACHE } from "./app/config/config.js";

const app=express();


//App use default middleware
app.use(cors());
app.use(bodyParser.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({extended:URL_ENCODE}));
app.use(helmet());
app.use(cookieParser());


//App use Limiter
const limiter = expressRateLimit({
    windowMs: REQUEST_TIME,
    max: REQUEST_NUMBER
});
app.use(limiter);

//cache
app.set("etag", WEB_CACHE);

//App use routes
app.use("/api",routes);

//Database connection
mongoose.connect(DATABASE,{autoIndex:true})
.then(()=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.error("Database connection error:", err);
});


app.listen(PORT,()=>{
    console.log("Server is running on Port "+PORT);
});