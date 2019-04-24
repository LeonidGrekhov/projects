const stripe = require('stripe')('sk_test_TedK4jxBHA4ZmkT9TNwWopG200Tkbu6zeO');
const chargeInit = require('./charge');
const checkoutInit = require('./checkout');

module.exports = {
  Charge: chargeInit(stripe),
  Checkout: checkoutInit(stripe)
};
