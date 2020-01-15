const mongoose = require('mongoose');
const User = require('../models/user');
require('../../config/db');

mongoose.set('useFindAndModify', false);

exports.getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => console.log(error.message));
};

exports.createUser = async (req, res) => {
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    nickname: req.body.nickname,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    created_on: new Date(),
  });
  console.log(newUser);
  await newUser.save();
  await res.send('New User Created');
};

exports.getUserById = (req, res) => {
  const userId = req.params.id;
  User.find({ email: userId })
    .then((result) => {
      console.log(result);
      res.status(201).send(result);
    }).catch((error) => {
      console.log(error);
    });
};

exports.updateNickname = (req, res) => {
  const queryNickname = req.query.email;
  const update = req.body;
  const options = {} || { new: true };
  User.findOneAndUpdate(queryNickname, update, options)
    .then((result) => {
      console.log(result);
      res.send(result);
    }).catch((error) => {
      console.log(error);
    });
};
