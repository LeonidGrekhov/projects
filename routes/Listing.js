const router = require('express').Router();
const { Listing } = require('../database/api');
const authenticated = require('./middlewares/authenticated');

const fs = require('fs');

//delete a listing if user session exists and matches, sends ok
router.delete(
  '/api/list/:lid',
  authenticated,
  ({ params: { lid } }, response) => {
    return Listing.deleteListing(parseInt(lid))
      .then(data => response.sendStatus(200))
      .catch(error => {
        return response.json(error);
      });
  }
);

// Get listing data + seller data if lid and user session exists
// User data can be accessed as data.user
router.get('/api/list/:lid', authenticated, ({ params: { lid } }, response) => {
  return Listing.getListing(parseInt(lid))
    .then(data => {
      return response.json(data);
    })
    .catch(error => {
      return response.json(error);
    });
});

// Create a listing based on data in body and send listing data if user session
// exists
router.put(
  '/api/list',
  authenticated,
  ({ body: { uid, bid, price, condition } }, response) => {
    return Listing.createListing(
      parseInt(uid),
      parseInt(bid),
      parseInt(price),
      condition
    )
      .then(data => {
        return response.json(data);
      })
      .catch(error => {
        return response.json(null);
      });
  }
);

// Update a listing based on data in body and send listing data if user
// session exists
router.put(
  '/api/list/:lid',
  authenticated,
  ({ params: { lid }, body: { price, condition } }, response) => {
    return Listing.updateListing(lid, parseInt(price), condition).then(data => {
      return Listing.getListing(lid)
        .then(updatedData => {
          return response.json(updatedData);
        })
        .catch(error => {
          return response.json(null);
        });
    });
  }
);

// Upload an image to a listing
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
