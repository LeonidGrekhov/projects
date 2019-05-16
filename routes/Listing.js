const router = require('express').Router();
const { Listing } = require('../database/api');
const authenticated = require('./middlewares/authenticated');

const fs = require('fs');

/* DEPRECATED: Mark for deletion? See delete route below
router.delete('/api/user/:uid/listing/:lid', ({ params: { lid } }, response) =>
  Listing.deleteListing(parseInt(lid)).then(data => response.json(data))
);
*/

//delete a listing if user session exists and matches, sends ok
router.delete(
  '/api/list/:lid',
  authenticated,
  ({ params: { lid } }, response) =>
    Listing.deleteListing(parseInt(lid))
      .then(data => response.sendStatus(200))
      .catch(error => response.json(error))
);

/* DEPRECATED: Mark for deletion? See get route below
router.get('/api/book/:bid/list/:lid', ({ params: { lid } }, response) => {
  return Listing.findListingByLID(parseInt(lid))
    .then(data => response.json(data))
    .catch(error => response.json(error));
});
*/

// Get listing data + seller data if lid and user session exists
// User data can be accessed as data.user
router.get(
  '/api/list/:lid', //authenticated,
  ({ params: { lid } }, response) =>
    Listing.getListing(parseInt(lid))
      .then(data => response.json(data))
      .catch(error => response.json(error))
);

// Create a listing based on data in body and send listing data if user session
// exists
router.put(
  '/api/list', //authenticated,
  ({ params: { uid, bid, price, condition } }, response) => {
    console.log(uid, bid, price, condition);
    Listing.createListing(uid, bid, parseInt(price), condition)
      .then(data => response.json(data))
      .catch(error => console.log(error), response.json(null));
  }
);

// Update a listing based on data in body and send listing data if user
// session exists
router.put(
  '/api/list/:lid', //authenticated,
  ({ params: { lid, price, condition } }, response) => {
    console.log(lid, price, condition);
    Listing.updateListing(lid, parseInt(price), condition)
      .then(data => response.json(data))
      .catch(error => console.log(error), response.json(null));
  }
);

/* DEPERECATED: The following routes may be deprecated; see update
route above
router.put(
  '/api/user/:uid/listing/',
  (
    { body: { bid, price, condition, updateLid }, params: { uid } },
    response
  ) => {
    if (updateLid) {
      return Listing.updateListing(
        parseInt(parseInt(updateLid)),
        price,
        condition
      )
        .then(data => response.json(data))
        .catch(error => response.json(error));
    }
    return Listing.createListing(parseInt(uid), parseInt(bid), price, condition)
      .then(data => response.json(data))
      .catch(error => response.json(error));
  }
);

router.put('/api/listing/edit/price', (request, response) => {
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

router.put('/api/listing/edit/condition', (request, response) => {
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

 DEPRECATED: possibly deprecated? See listing delete route above
router.post('/api/listing/delete', (request, response) => {
  const listingId = request.body.lid;
  return Listing.deleteListing(listingId)
    .then(Listing => {
      response.json(Listing);
    })
    .catch(error => {
      console.log(error);
      response.json(error);
    });
});
*/

router.post('/api/listing/uploadimage', (request, response) => {
  const listingId = request.body.lid;
  const filename = request.body.filename;
  const extension = request.body.extension;
  const streamData = request.body.streamData;

  //calling a function with test buffer - imageFileBuffer
  return Listing.uploadListingImage(listingId, streamData, filename, extension)
    .then(data => {
      response.json(data);
    })
    .catch(error => {
      response.json(error);
    });
});

module.exports = router;
