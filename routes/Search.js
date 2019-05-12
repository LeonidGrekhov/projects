const router = require('express').Router();
const { Search } = require('../database/api');
const { Listing } = require('../database/api');

const getBids = data => {
  let bids = [];
  for (const book of data) {
    bids.push(book.bid);
  }
  return bids;
};

router.get('/api/search/title/:titleString/page/:page', (request, response) => {
  let searchTerm = request.params.titleString;
  Search.findBookByTitle(searchTerm)
    .then(data => {
      //If the user is authenticated, do search for listings and return the
      // listings in the response as well as the books; otherwise just books
      if (request.isAuthenticated()) {
        const bids = getBids(data);
        return Listing.findListing(bids)
          .then(listings => {
            response.json({ data, listings, pageCount: 1 });
          })
          .catch(error => {
            console.log(error);
            response.json(error);
          });
      } else {
        response.json({ data, pageCount: 1 });
      }
    })

    .catch(error => {
      console.log(error);
      response.json({ error });
    });
});

router.get(
  '/api/search/author/:authorString/page/:page',
  (request, response) => {
    let searchTerm = request.params.authorString;
    Search.findBookByAuthor(searchTerm)
      .then(data => {
        if (request.isAuthenticated()) {
          const bids = getBids(data);
          return Listing.findListing(bids)
            .then(listings => {
              console.log(listings);
              response.json({ data, listings, pageCount: 1 });
            })
            .catch(error => {
              response.json(error);
            });
        } else {
          response.json({ data, pageCount: 1 });
        }
      })

      .catch(error => {
        console.log(error);
        response.json({ error });
      });
  }
);

router.get('/api/search/isbn/:isbnString/page/:page', (request, response) => {
  let searchTerm = request.params.isbnString;
  Search.findBookByISBN(searchTerm)
    .then(data => {
      if (request.isAuthenticated()) {
        const bids = getBids(data);
        return Listing.findListing(bids)
          .then(listings => {
            console.log(listings);
            response.json({ data, listings, pageCount: 1 });
          })
          .catch(error => {
            response.json(error);
          });
      } else {
        response.json({ data, pageCount: 1 });
      }
    })

    .catch(error => {
      console.log(error);
      response.json({ error });
    });
});

router.get('/api/book/:bid/listing/:lid', (req, res) => {
  const { bid, lid } = req.params;
  return Search.findBookByID(bid)
    .then(book => {
      return Search.findListingByID(lid)
        .then(listing => {
          return res.json({ book, listing });
        })
        .catch(e => {
          return res.json(e);
        });
    })
    .catch(e => {
      return res.json(e);
    });
});

module.exports = router;
