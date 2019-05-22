const emit = sockets => (sid, rid, crid, message) => {
  const senderSocket = sockets.get(sid);
  const receiverSocket = sockets.get(rid);
  if (senderSocket) {
    senderSocket.emit(`chat:${crid}`, message);
  }
  if (receiverSocket) {
    receiverSocket.emit(`chat:${crid}`, message);
  }
};

module.exports = sockets => ({
  emit: emit(sockets)
});
