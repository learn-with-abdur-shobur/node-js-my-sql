require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const userRouter = require('./api/user/userRouter');
app.use(cors());
app.use(express.json());
app.use('/api/user', userRouter);

app.listen(process.env.app_port, () => {
	console.log('connect', process.env.app_port);
});
