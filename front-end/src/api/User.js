import request from './middlewares/request';

export default {
  getUserProfile: uid => request(`/user/${uid}`, {}, 'get'),
  getUserConfiguration: uid => request(`/user/${uid}/configuration`, {}, 'get'),
  postUserConfiguration: ({uid, configuration}) => request(`/user/${uid}/configuration`, {configuration})
};
