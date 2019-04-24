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
