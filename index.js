require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const upload = multer(); // Initialize multer

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const userRouter = require('./api/user/userRouter');
const routerUser2 = require('./api/user-2/user-2.route');
app.use(cors());
app.use(express.json());
app.use('/api/user', userRouter);

app.use('/api/user-2', upload.none(), routerUser2);

app.get('/api', (req, res) => {
	res.json({
		success: 1,
		message: 'Running Server!',
	});
});
app.listen(process.env.app_port, () => {
	console.log('connect', process.env.app_port);
});
