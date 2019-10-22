const express =  require('express');
      helmet =  require('helmet');
      dotnev = require('dotenv').config();
      app =  express();

app.use(helmet());

app.get('/', (req, res) => {
    res.send(`Hello from ${process.env.SERVER_NAME} ${process.env.SERVER_VERSION}`);
});

const listener = app.listen(process.env.SERVER_PORT, () => {
    console.log(`${process.env.SERVER_NAME} ${process.env.SERVER_VERSION} running on ${listener.address().port}`)
});
