const pool = require('../../config/database');

module.exports = {
	create: (data, callback) => {
		pool.query(
			`insert into register(name,email,password)
					values(?,?,?)`,
			[data.name, data.email, data.password],
			(error, result) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	get: (data, callback) => {
		const query = 'SELECT * FROM register';

		pool.query(query, (error, result) => {
			if (error) {
				return callback(error);
			}
			return callback(null, result);
		});
	},
	getUserById: (id, callback) => {
		const query = `SELECT * FROM register WHERE id=?`;

		pool.query(query, [id], (error, result) => {
			if (error) {
				return callback(error);
			}

			return callback(null, ...result);
		});
	},
};
