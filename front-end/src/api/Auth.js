import request from './request';

const jsonify = response => response.json();

export default {
  getRegister: () => request('/register', {}, 'get'),
  postLogin: (email, password) =>
    request('/login', { email, password }).then(jsonify),
  postLogout: () => request('/logout', {}),
  postRegister: (name, email, password) =>
    request('/register', { name, email, password })
};
