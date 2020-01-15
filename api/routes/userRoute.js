const router = require('express').Router();
const User = require('../controllers/userController');

router.get('/', User.getAllUsers);

router.post('/', User.createUser);

router.get('/:id', User.getUserById);

router.put('/', User.updateNickname);

module.exports = router;
