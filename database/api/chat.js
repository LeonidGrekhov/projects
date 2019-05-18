const getChat = db => (uid, rid) => db.chat.findOne({ where: { uid, rid } });

const getChatroom = db => crid =>
  db.chatroom.findByPk(crid, {
    include: [
      {
        model: db.chatlog,
        as: Chatlogs
      }
    ]
  });

const createChat = db => (uid, rid) =>
  db.chatroom.create().then(chatroom =>
    db.chat
      .create({
        rid: uid,
        uid: rid,
        crid: chatroom.crid
      })
      .then(chat =>
        db.chat.create({
          uid,
          rid,
          crid: chat.crid
        })
      )
  );

const createChatlog = db => (crid, message) =>
  db.chatlog.create({ crid, message });

module.exports = db => ({
  getChat: getChat(db),
  getChatroom: getChatroom(db),
  createChat: createChat(db),
  createChatlog: createChatlog(db)
});