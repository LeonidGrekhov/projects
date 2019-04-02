const db = require('../models');
const authInit = require('./auth');

module.exports = {
  Auth: authInit(db)
};
