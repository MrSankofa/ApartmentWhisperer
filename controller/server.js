require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use(express.static(path.join(__dirname, '/../view/public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) console.error(err);
  console.log(`listening on port: ${PORT}`);
});

module.exports = app;
