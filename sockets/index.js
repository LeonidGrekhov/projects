const io = require('socket.io')();
const session = require('../database/config/session');
import { chatHandler } from './handlers';
const init = server => {
  io.use(({ request }, next) => {
    // setup express session config for socket
    session(request, request.res, next);
  });

  io.attach(server);
};
const userChatrooms = new Map();

io.on('connection', socket => {
  if (socket.request.session.passport) {
    const { uid } = socket.request.session.passport;
    userChatrooms.set(uid, socket);
    socket.on('disconnect', () => {
      userChatrooms.delete(uid);
    });
  }
});

module.exports = {
  init,
  chatHandler: chatHandler(userChatrooms)
};
