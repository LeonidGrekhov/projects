// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_TedK4jxBHA4ZmkT9TNwWopG200Tkbu6zeO");


// a sample function to call stripe API and print the response
async function StripeAPI(){
  const charge = await stripe.charges.create({
    amount: 999,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'jenny.rosen@example.com',
  })
  console.log('Printing variable after await');
  console.log(charge);
}

console.log('Calling Stripe API');
StripeAPI();

/*

Original Code

const createCharge = stripe => token => {
  console.log('*** DEBUG *** \n');
  console.log('Token value: ' + token + '\n');
  (async token => {
    const charge = await stripe.charges.create({
      amount: 999,
      currency: 'usd',
      descritption: 'Example charge',
      soure: token
    });
  })();
};

module.exports = stripe => ({
  createCharge: createCharge(stripe)
});

*/