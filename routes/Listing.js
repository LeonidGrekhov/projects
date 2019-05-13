const router = require('express').Router();
const { Listing } = require('../database/api');
const fs = require('fs');

/*const imageFileBuffer = fs.readFileSync(
  '/Users/vismaypatel/Desktop/Software Engineering/TheBookProject/csc648-sp19-team244/database/api/2.png'
);*/

router.delete('/api/user/:uid/listing/:lid', ({ params: { lid } }, response) =>
  Listing.deleteListing(parseInt(lid)).then(data => response.json(data))
);

router.get('/api/book/:bid/list/:lid', ({ params: { lid } }, response) => {
  return Listing.findListingByLID(parseInt(lid))
    .then(data => response.json(data))
    .catch(error => response.json(error));
});

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

//Delete listing request
router.post('/api/listing/delete', (request, response) => {
  const listingId = request.body.lid;
  return Listing.deleteLisitng(listingId)
    .then(Listing => {
      response.json(Listing);
    })
    .catch(error => {
      console.log(error);
      response.json(error);
    });
});

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
