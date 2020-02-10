const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const app_debug = require('debug')('app');
// const socket_debug = require('debug')('chat_message');
const config = require('config');
const morgan = require('morgan');
const genres = require('./routes/genres');
const status = require('./routes/status');

app.use(express.json());
app.use(express.static('public'));
app.use('/api/genres', genres);
app.use('/api/status', status);

if (app.get('env') === 'dev') {
  app_debug('Morgan loaded');
  app.use(morgan('tiny'))
}

const port = process.env.PORT || 3031;

io.on('connection', socket => {
  app_debug('user connected');
  socket.on('io_connect', (data) => {
    console.log(data)
  });
});

http.listen(port, () => {
  app_debug(`Application running on ${port}`);
  app_debug(`App Name: ${config.name}`);
});
