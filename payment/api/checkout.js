const createCheckout = stripe => amount => book =>
  (async () => {
    const session = await stripe.checkout.sessions.create({
      customer: 'example_cus',
      success_url: 'https://www.litlister.com/transaction/success',
      cancel_url: 'https://www.listlister.com/transaction/cancel',
      payment_method_types: ['card'],
      line_items: [
        {
          amount: amount,
          currency: 'usd',
          name: book,
          quantity: 1
        }
      ],
      payment_intent_data: {
        caputure_method: 'manual'
      }
    });
    return session;
  })();

module.exports = stripe => ({
  createCheckout: createCheckout(stripe)
});
