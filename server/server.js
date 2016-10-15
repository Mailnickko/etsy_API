const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('./config/middleware')(app, express);

const port = 3000;

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);
}

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});

module.exports = app;
