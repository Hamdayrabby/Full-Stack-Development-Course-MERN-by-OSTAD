const express = require('express');
const router = require('./routes/api');
const app=new express();

//security middleware
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitizer = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

//security middleware implementation
app.use(helmet());
app.use(cors());
app.use(mongoSanitizer());
app.use(xss());
app.use(hpp());


//request rate limiter
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour'
});

app.use(limiter);
app.use("/api/v1",router)

app.use(
    '*',
    (req, res) => {
        res.status(404).json({
            status: 404,
            message: 'Page Not Found',
        });
    }
)
module.exports = app;
// In the above code, we imported the router and used it in the app. We also exported the app.