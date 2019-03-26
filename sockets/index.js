const io = require('socket.io')();

const init = server => {
  io.use(({ request }, next) => {
    // setup express session config for socket
    // session(request, request.res, next);
  });

  io.attach(server);
};

io.on('connection', socket => {
  socket.on('disconnect', () => {});
});

module.exports = {
  init
};
