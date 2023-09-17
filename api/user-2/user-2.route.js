const { Router } = require('express');
const {
	createUser,
	getUser,
	getSingleUserById,
} = require('./user-2.controller');
const routerUser2 = Router();

routerUser2.get('/get-user-v2', getUser);
routerUser2.get('/get-user-v2/:id', getSingleUserById);
routerUser2.post('/create-user-v2', createUser);

module.exports = routerUser2;
