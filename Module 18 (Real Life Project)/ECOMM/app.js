const express = require('express')
const app = new express();;
require ('dotenv').config();
const router = require('./src/routes/api');
const ratelimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const cors = require('cors');
const xss = require('xss-clean');
const hpp = require('hpp');
const mongooseSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');




// Database connection
mongoose.connect(process.env.MONGO_URI)
	.then((res) => {
		console.log('Database connected');
	}).catch((err) => {
		console.log('Database connection failed', err);
	});

// Middleware
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(mongooseSanitize());


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true, limit: '50mb'}));

const limiter = ratelimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 3000, // limit each IP to 100 requests per windowMs
});

app.use(limiter);
app.use('/api/v1', router);
app.use(express.static('client/dist'));
app.set('etag', false);

module.exports = app;
