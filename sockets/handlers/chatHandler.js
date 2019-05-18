const chat = userChatrooms => (senderId, receiverId, message) => {
  userChatrooms.get(receiverId).emit(`chat:${senderId}`, message);
};

// export default userChatrooms => {
//   return {
//     chat: chat(userChatrooms)
//   };
// };

module.exports = chat;
