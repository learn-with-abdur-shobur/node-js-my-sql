const { createUser } = require('./userControlar');

const router = require('express').Router();
router.post('/', createUser);

module.exports = router;
