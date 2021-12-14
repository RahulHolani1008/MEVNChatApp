const express = require('express');
const path = require('path');
const socket = require('socket.io');
const http = require('http');
const logger = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const dotenv = require('dotenv').config({ debug: process.env.ENV == "DEV" });

const room = require('./routes/room');
const chat = require('./routes/chat');
const db = require('./utils/db');
const log = require('./utils/logger');
const app = express();
const server = http.createServer(app);
const io = socket(server);

io.on("connection", (stream) => {
  console.info("New connection");
})

app.use(logger('dev'));
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/rooms', express.static(path.join(__dirname, 'dist')));
app.use('/api/room', room);
app.use('/api/chat', chat);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.info(`Application successfully running on port ${PORT}`)
})