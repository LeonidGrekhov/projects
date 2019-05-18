const io = require('socket.io')();
const session = require('../database/config/session');
import { ChatHandler } from './handlers';

const init = server => {
  io.use(({ request }, next) => session(request, request.res, next));
  io.attach(server);
};

const userSockets = new Map();

io.on('connection', socket => {
  try {
    if (socket.request.session.passport) {
      const {
        user: { uid }
      } = socket.request.session.passport;
      userSockets.set(uid, socket);
      socket.on('disconnect', () => userSockets.delete(uid));
    }
  } catch (error) {
    console.log('Socket Error:', error);
  }
});

module.exports = {
  init,
  Chat: ChatHandler(userSockets)
};
