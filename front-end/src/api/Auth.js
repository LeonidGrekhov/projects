import request from './request';

const jsonify = response => response.json();

export default {
  getLogin: () => request('/login', {}, 'get'),
  getRegister: () => request('/register', {}, 'get'),
  postLogin: (email, password) =>
    request('/login', { email, password }).then(jsonify),
  postLogout: () => request('/logout', {}),
  postRegister: (firstname, lastname, email, password) =>
    request('/register', { name: firstname, lastname, email, password })
};
