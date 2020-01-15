const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express();

const userRoute = require('./api/routes/userRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet());
app.use(cors());
app.use('/users', userRoute);


app.get('/', (req, res) => {
  // res.sendFile(`${__dirname}/views/index.html`);
  res.send(`Hello from ${process.env.SERVER_NAME} ${process.env.SERVER_VERSION}`);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});

app.listen(process.env.SERVER_PORT || 3000, process.env.SERVER_HOST || 'localhost');
