import jsonify from './middlewares/jsonify';
import request from './middlewares/request';

export default {
  getUserChatList: uid => request(`/user/${uid}/chat`, {}, 'get').then(jsonify),
  getUserChatLog: ({uid, cid}) => request(`/user/${uid}/chat/${cid}`, {}, 'get').then(jsonify),
  getUserConfiguration: uid => request(`/user/${uid}/configuration`, {}, 'get').then(jsonify),
  getUserProfile: uid => request(`/user/${uid}`, {}, 'get'),
  postUserChatLog: ({uid, cid, message}) => request(`/user/${uid}/chat.${cid}`, {message}),
  postUserConfiguration: ({uid, configuration}) => request(`/user/${uid}/configuration`, {configuration})
};
