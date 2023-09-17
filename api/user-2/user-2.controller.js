const { create, get, getUserById } = require('./user-2.service');

module.exports = {
	createUser: (req, res) => {
		const body = req.body;
		console.log(body, 'Body data');
		create(body, (error, result) => {
			if (error) {
				console.log(error);
				return res.status(500).json({
					success: false,
					message: 'Failed To Create User',
				});
			}
			return res.status(200).json({
				success: true,
				message: 'Create User Successfully',
			});
		});
	},
	getUser: (req, res) => {
		get(null, (error, result) => {
			if (error) {
				console.log(error);
				return res.status(500).json({
					success: false,
					message: 'Failed To get User',
				});
			}
			return res.status(200).json({
				success: true,
				message: 'All Users Load Successfully',
				data: result,
			});
		});
	},
	getSingleUserById: (req, res) => {
		const { id } = req.params;
		console.log(id);
		getUserById(id, (error, result) => {
			if (error) {
				console.log(error);
				return res.status(500).json({
					success: false,
					message: 'Did Not get user',
				});
			}
			return res.status(200).json({
				success: true,
				message: 'Get User Successfully',
				data: result,
			});
		});
	},
};
