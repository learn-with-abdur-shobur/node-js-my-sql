const mysql = require('mysql');

const config = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'school',
};

const con = mysql.createConnection(config);
con.connect(function (er) {
	if (er) {
		console.log(er);
	} else {
		console.log('succs');
	}
});
