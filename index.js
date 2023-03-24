const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.listen(3000, () => {
	console.log('connect');
});
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'sos',
});
connection.connect();
connection.query('SELECT * FROM `sizes`', function (error, results) {
	if (error) throw error;
	console.log('The solution is: ', results);
});
connection.end();

app.get('/', (req, res) => {
	connection.connect();
	connection.query('SELECT * FROM `sizes`', function (error, results) {
		// if (error) throw error;
		// console.log(error);s
		// console.log('The solution is: ', results);
		res.json(results);
	});
	connection.end();
});
