const pool = require('../../config/database');
module.exports = {
	create: (data, callBack) => {
		pool.query(
			`insert into user(firstName,lastName,email,phone,password) values(?,?,?,?,?,?)`,
			[data.firstName, data.lastName, data.email, data.phone, data.password],
			(error, result, fields) => {
				if (error) {
					callBack(error);
				}
				callBack(null, result);
			}
		);
	},
};
