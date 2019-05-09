const router = require('express').Router();
const { Listing } = require('../database/api');

router.post('/api/listing/create', (request, response) => {
  const { book, user, price } = request.body;
  return Listing.insertListing(book, user, price)
    .then(Listing => {
      console.log(Listing);
      response.json(Listing);
    })
    .catch(error => {
      console.log(error);
      response.json(error);
    });
});

router.post('/api/listing/edit/price', (request, response) => {
  const listingId = request.body.lid;
  const price = request.body.price;

  if (typeof price != 'number') throw 'This is not a valid price';

  return Listing.editPrice(listingId, price)
    .then(Listing => {
      response.json(Listing);
    })
    .catch(error => {
      console.log(error);
      response.json(error);
    });
});

router.post('/api/listing/edit/condition', (request, response) => {
  const listingId = request.body.lid;
  const condition = request.body.condition;

  if (typeof condition != 'string') throw 'This is not a valid condition';
  if (condition.length > 45) throw 'This condition is too long';

  return Listing.editCondition(listingId, condition)
    .then(Listing => {
      response.json(Listing);
    })
    .catch(error => {
      response.json(error);
    });
});

//Delete listing request
router.post('/api/listing/delete', (request, reponse) => {
  const listingId = request.body.lid;
  return Listing.deleteLisitng(listingId)
    .then(Listing => {
      console.log(Listing);
      reponse.json(Listing);
    })
    .catch(error => {
      console.log(error);
      response.json(error);
    });
});

module.exports = router;
