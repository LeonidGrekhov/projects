const express = require('express');
const router = express.Router();
const Stripe = require('../payment/api');
/*
while creating new files for example 'payment.js' that contains specific API routes,
make sure you add the file 'payment.js' in 'Index.js' file

-------------------
const PaymentRoute = require('./Payment');
router.use(PaymentRoute);
-------------------
This syntax enables the router to call the specific API paths (/api/payment/charge) defined in the js file for example 'payment.js'

*/

router.post('/api/transaction/charge', (req, res) => {
  console.log('API - transaction/charge is running');
  token = req.body.token;
  charge = Stripe.Charge.createCharge(token);
  console.log(charge);
  res.send(charge);
});

router.post('/api/transaction/checkout', (req, res) => {
  amount = req.body.amount;
  name = req.body.name;
  checkout = Stripe.Checkout.createCheckout(name, amount);
  console.log(checkout);
  res.send(checkout);
});

module.exports = router;
