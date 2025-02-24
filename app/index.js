const express = require('express');
const morgan = require('morgan');
const app = express();
const routerHandler = require('./routes');


app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

app.use('/api/v1',routerHandler);

module.exports = app;