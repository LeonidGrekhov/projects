const db = require('../models');
const authInit = require('./auth');
const searchInit = require('./search');
const listingInit = require('./listing');

module.exports = {
  Auth: authInit(db),
  Search: searchInit(db),
  Listing: listingInit(db)
};
