import jsonify from './middlewares/jsonify';
import request from './middlewares/request';

export default {
  getLogin: () => request('/login', {}, 'get').then(jsonify),
  getRegister: () => request('/register', {}, 'get'),
  postLogin: (email, password) =>
    request('/login', { email, password }).then(jsonify),
  postLogout: () => request('/logout', {}),
  postRegister: (firstname, lastname, email, password) =>
    request('/register', { firstname, lastname, email, password })
};
