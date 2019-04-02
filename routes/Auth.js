const router = require('express').Router();

const emptyStringsToNull = require('./middlewares/emptyStringsToNull');
const authenticateUser = require('./middlewares/authenticateUser');
const sendUserIdAndUserName = require('./middlewares/sendUserIdAndUserName');

router.get('/api/register', authenticateUser, sendUserIdAndUserName);

router.get('/api/login', authenticateUser, sendUserIdAndUserName);

router.get('/api/logout', authenticateUser, sendUserIdAndUserName);

router.post('/api/login', emptyStringsToNull, (request, response) => {
  const { email, password } = request.body;
  // do log in here
  // request.login(user, error => {})
  response.json({ email, password });
});

router.post('/api/logout', (request, response) => {
  // do log out here
  // request.logout();
  response.sendStatus(200);
  return null;
});

router.post('/api/register', emptyStringsToNull, (request, response) => {
  const { name, email, password } = request.body;
  // do register here
  // db.create_user then log in
  return response.json({ name, email, password });
});

module.exports = router;
