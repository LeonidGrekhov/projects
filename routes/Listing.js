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

router.post('/api/listing/edit', (request, response) => {
  const listingId = request.body.lid;
  const price = request.body.price;
  return Listing.editPrice(listingId, price)
    .then(Listing => {
      console.log(Listing);
      response.json(Listing);
    })
    .catch(error => {
      console.log(error);
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
