const express = require('express');
const httpStatus = require('http-status');
const router = require('./router');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use('/', router);

app.use((req, res) => {
  res.format({
    // 404 fallback
    default: () => res.status(httpStatus.NOT_FOUND).send({
      status: 404,
      message: 'Not found',
    }),
  });
});

module.exports = app;
