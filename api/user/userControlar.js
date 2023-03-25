const { create } = require('./userService');
const { hashSync, genSaltSync } = require('bcrypt');
module.exports = {
	createUser: (req, res) => {
		const body = req.body;
		const salt = genSaltSync(10);
		body.password = hashSync(body.password, salt);

		create(body, (err, result) => {
			if (err) {
				console.log(err);
				return res.status(400).json({
					success: 0,
					message: 'Failed',
				});
			}

			return res.status(200).json({
				message: 'success',
				data: result,
			});
		});
	},
};
