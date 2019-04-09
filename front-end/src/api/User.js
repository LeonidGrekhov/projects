import request from './request';

export default {
  getUserProfile: uid => request(`/user/${uid}`, {}, 'get')
};
