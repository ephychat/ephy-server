const router = require('express').Router();
const User = require('../controllers/userController');

router.get('/', User.getAllUsers);

module.exports = router;
