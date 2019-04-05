const router = require('express').Router();

const bcrypt = require('bcrypt');
const { Auth } = require('../database/api');

const authenticated = require('./middlewares/authenticated');
const notAuthenticated = require('./middlewares/notAuthenticated');
const sendStatusOk = require('./middlewares/sendStatusOk');
const emptyStringsToNull = require('./middlewares/emptyStringsToNull');
const authenticateUser = require('./middlewares/authenticateUser');
const sendUserIdAndUserName = require('./middlewares/sendUserIdAndUserName');

router.get('/api/login', authenticated, sendUserIdAndUserName);

router.get('/api/register', notAuthenticated, sendStatusOk);

router.post(
  '/api/login',
  notAuthenticated,
  emptyStringsToNull,
  (request, response) => {
    const { email, password } = request.body;
    return Auth.findUserByEmail(email)
      .then(user => {
        if (user) {
          bcrypt
            .compare(password, user.password)
            .then(isEqual => {
              if (isEqual) {
                return user;
              }
              return Promise.reject(new Error('Invalid credentials.'));
            })
            .then(user =>
              request.login(user, error => {
                if (error) {
                  return response.json(error);
                }
                return response.json(user);
              })
            )
          } else {
            response.json({error: 'not found'})
          }
      })
      .catch(error => response.json(error));
  }
);

router.post('/api/logout', authenticated, (request, response) => {
  request.logout();
  response.sendStatus(200);
});

router.post(
  '/api/register',
  notAuthenticated,
  emptyStringsToNull,
  (request, response) => {
    const { firstname, lastname, email, password } = request.body;
    console.log('test');
    console.log(firstname);
    return Auth.insertUser(firstname, lastname, email, password)
      .then(user =>
        request.login(user, error => {
          console.log('test')
          console.log(user)
          console.log(error)
          if (error) {
            return response.json(error);
          }
          return response.json(user);
        })
      )
      .catch(error => {console.log(error);response.json(error)});
  }
);

module.exports = router;
