const emit = sockets => (sid, rid, message) => {
  const senderSocket = sockets.get(sid);
  const receiverSocket = sockets.get(rid);
  if (senderSocket) {
    senderSocket.emit(`chat:${rid}`, message);
  }
  if (receiverSocket) {
    receiverSocket.emit(`chat:${sid}`, message);
  }
};

module.exports = sockets => ({
  emit: emit(sockets)
});
