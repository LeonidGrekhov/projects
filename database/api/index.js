const db = require('../models');
const authInit = require('./auth');
const searchInit = require('./search');

module.exports = {
  Auth: authInit(db),
  Search: searchInit(db)
};
