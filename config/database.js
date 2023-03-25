const { createPool } = require('mysql');

const pool = createPool({
	host: process.env.host,
	port: process.env.db_port,
	user: process.env.user,
	password: process.env.password,
	connectionLimit: 10,
	database: process.env.db,
});

module.exports = pool;
