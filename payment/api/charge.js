const stripe = require('stripe')('sk_test_TedK4jxBHA4ZmkT9TNwWopG200Tkbu6zeO');

const createCharge = token =>
  (async () => {
    const charge = await stripe.charges.create({
      amount: 1,
      currency: 'usd',
      descrition: 'example',
      source: token,
      capture: false
    });
    return charge;
  })();

const captureCharge = chargeID => {
  const charge = stripe.Charges.capture(chargeID);
  return charge;
};

module.exports = {
  createCharge: createCharge(token),
  captureCharge: captureCharge(chargeID)
};
