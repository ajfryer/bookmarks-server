// App

// dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const globalErrorHandler = require('./globalErrorHandler');
const validateBearerToken = require('./validateBearerToken');
const bookmarksRouter = require('./bookmarks/bookmarksRouter');

// express app
const app = express();

// express middleware
app.use(
  morgan(NODE_ENV === 'production' ? 'tiny' : 'common', {
    skip: () => NODE_ENV === 'test'
  })
);
app.use(helmet());
app.use(cors());
app.use(validateBearerToken);

// public static files
app.use(express.static('public'));

//routes
app.use(bookmarksRouter);

app.get('/', (req, res) => {
  console.log('hello');
  res.send('bookmarks server');
});

// default global error-handling middleware function
app.use(globalErrorHandler);

module.exports = app;
