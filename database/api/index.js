const db = require('../models');
const authInit = require('./auth');
const searchInit = require('./search');
const listingInit = require('./listing');
const ratingInit = require('./rating');

module.exports = {
  Auth: authInit(db),
  Search: searchInit(db),
  Listing: listingInit(db),
  Rating: ratingInit(db)
};
