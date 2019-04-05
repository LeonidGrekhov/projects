const router = require('express').Router();

const authenticated = require('./middlewares/authenticated');
const notAuthenticated = require('./middlewares/notAuthenticated');
const sendStatusOk = require('./middlewares/sendStatusOk');
const emptyStringsToNull = require('./middlewares/emptyStringsToNull');
const authenticateUser = require('./middlewares/authenticateUser');
const sendUserIdAndUserName = require('./middlewares/sendUserIdAndUserName');

router.get('/api/login', authenticateUser, sendUserIdAndUserName);

router.get('/api/register', notAuthenticated, sendStatusOk);

router.post(
  '/api/login',
  notAuthenticated,
  emptyStringsToNull,
  (request, response) => {
    const { email, password } = request.body;
    return Auth.findUserByEmail(email)
      .then(user => {
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
          .catch(error => response.json(error));
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
    return Auth.insertUser(firstname, lastname, email, password)
      .then(user =>
        request.login(user, error => {
          if (error) {
            return response.json(error);
          }
          return response.json(user);
        })
      )
      .catch(error => response.json(error));
  }
);

module.exports = router;
