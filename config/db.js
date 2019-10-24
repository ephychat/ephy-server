const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbOptions = {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.DB_URI, dbOptions);
const db = mongoose.connection;

db.on('error', () => {
  console.log('Failed to connect to DB, please try again!');
});

db.once('open', () => {
  console.log('Connection to DB established successfully!');
});
