const express = require('express');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

const userRoute = require('./api/routes/userRoute');

app.use(helmet());
app.use('/users', userRoute);

app.get('/', (req, res) => {
  res.send(`Hello from ${process.env.SERVER_NAME} ${process.env.SERVER_VERSION}`);
});

app.listen(process.env.SERVER_PORT);
