const { NODE_ENV } = require('./config');
const logger = require('./logger');

const globalErrorHandler = (error, req, res, next) => {
  logger.error(error);
  let response;
  if (NODE_ENV === 'production') response = { error: 'server error' };
  else response = { error: error.message };
  res.status(500).json(response);
};

module.exports = globalErrorHandler;
