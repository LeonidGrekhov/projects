const router = require('express').Router();
const Stripe = require('../payment/api');

router.post('/api/transaction/charge', (req, res) => {
  token = req.body.token;
  charge = Stripe.Charge.createCharge(token);
  console.log(charge);
  res.send(charge);
});

router.post('/api/transaction/checkout', (req, res) => {
  amount = req.body.amount;
  name = req.body.name;
  checkout = Stripe.Checkout.createCheckout(amount, name);
  console.log(checkout);
  res.send(checkout);
});

module.exports = router;
