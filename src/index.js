const mongoose = require('mongoose');
const config = require('./config');
const app = require('./app');

let server; 
const logger = console;

// database connection first
mongoose.connect(config.mongoose.url, config.mongoose.options)
  .then(async () => {
    logger.info('Connected to MongoDB');
    // then start the server
    server = app.listen(config.port, () => {
      logger.log(`Listening to port ${config.port}`);
    });
  });

// Exit/Error handlers

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = error => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
