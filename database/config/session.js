const express_session = require('express-session');
const MysqlSession = require('express-mysql-session')(express_session);

const session = express_session({
  store: new MysqlSession(),
  secret: 'me is a secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 }
});

module.exports = session;
