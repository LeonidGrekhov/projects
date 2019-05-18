const router = require('express').Router();
const { Chat: ChatDb } = require('../database/api');
const { Chat: ChatSocket } = require('../sockets');
const authenticated = require('./middlewares/authenticated');

router.get(
  '/api/chat/:rid',
  authenticated,
  ({ params: { rid }, user: { uid } }, response) =>
    ChatDb.getChat(uid, rid)
      .then(chat => response.json(chat))
      .catch(error => response.json(error))
);

router.get(
  '/api/chatroom/:crid',
  authenticated,
  ({ params: { crid } }, response) =>
    ChatDb.getChatroom(crid)
      .then(chatroom => response.json(chatroom))
      .catch(error => response.json(error))
);
router.put(
  '/api/chat/:rid',
  authenticated,
  ({ params: { rid }, user: { uid } }, response) =>
    ChatDb.createChat(uid, rid)
      .then(chat => response.json(chat))
      .catch(error => response.json(error))
);
router.put(
  '/api/chatroom/:crid',
  authenticated,
  (
    { params: { crid }, body: { message }, user: { uid, firstname, lastname } },
    response
  ) => {
    const log = `${firstname} ${lastname}: ${message}`;
    return ChatDb.createChatlog(crid, log)
      .then(chatlog => chatlog.getChatroom())
      .then(chatroom => chatroom.getChats({ where: { uid } }))
      .then(chats => {
        ChatSocket.emit(uid, chats[0].rid, log);
      })
      .catch(error => response.json(error));
  }
);

module.exports = router;
