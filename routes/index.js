const router = require('express').Router();
const AuthRoute = require('./Auth');
const DefaultRoute = require('./Default');
const SearchRoute = require('./Search');
const ListingRoute = require('./Listing');

if (process.env.LOCAL_SERVER) {
  router.use((_, response, next) => {
    response.header('Access-Control-Allow-Origin', 'http://localhost:4000');
    response.header('Access-Control-Allow-Methods', 'GET, POST');
    response.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    response.header('Access-Control-Allow-Credentials', true);
    next();
  });
}

router.use(AuthRoute);
router.use(SearchRoute);
router.use(ListingRoute);
router.use(DefaultRoute);

module.exports = router;
