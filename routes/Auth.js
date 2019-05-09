const router = require('express').Router();

const bcrypt = require('bcrypt');
const { Auth } = require('../database/api');

const authenticated = require('./middlewares/authenticated');
const notAuthenticated = require('./middlewares/notAuthenticated');
const sendStatusOk = require('./middlewares/sendStatusOk');
const emptyStringsToNull = require('./middlewares/emptyStringsToNull');
const sendUserIdAndUserName = require('./middlewares/sendUserIdAndUserName');
const sendVerificationEmail = require('./middlewares/sendgridemailhelper');

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
                return response.json({
                  firstname: user.firstname,
                  lastname: user.lastname
                });
              })
            );
        } else {
          response.json({ error: 'not found' });
        }
      })
      .catch(error => response.json(error));
  }
);

router.post('/api/logout', authenticated, (request, response) => {
  request.logout();
  response.sendStatus(200);
});

/* New register router. First, check if the user exists, and if they do
  throw an exists error. Otherwise insert the user into the db, insert a
  verification token into the db, send the verification e-mail, and log the
  user in.
 */
router.post(
  '/api/register',
  notAuthenticated,
  emptyStringsToNull,
  (request, response) => {
    const { firstname, lastname, email, password } = request.body;

    return Auth.findUserByEmail(email)
      .then(user => {
        if (user) return Promise.reject(new Error('User Exists'));

        return Auth.insertUser(firstname, lastname, email, password).then(
          user => {
            return Auth.insertVerificationToken(user.uid).then(verification => {
              sendVerificationEmail(user.email, verification.token);
              request.login(user, error => {
                if (error) {
                  return response.json(error);
                }
                return response.json({
                  firstname: user.firstname,
                  lastname: user.lastname
                });
              });
            });
          }
        );
      })
      .catch(e => {
        response.json(e);
      });
  }
);

module.exports = router;
