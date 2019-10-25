const User = require('../models/user');
require('../../config/db');

exports.getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => console.log(error.message));
};
