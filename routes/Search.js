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
        return Listing.findListingByBIDS(bids)
          .then(listings => {
            response.json({ data, bids, listings, pageCount: 1 });
          })
          .catch(error => {
            response.json(error);
          });
      } else {
        response.json({ data, pageCount: 1 });
      }
    })

    .catch(error => {
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
          return Listing.findListingByBIDS(bids)
            .then(listings => {
              response.json({ data, bids, listings, pageCount: 1 });
            })
            .catch(error => {
              response.json(error);
            });
        } else {
          response.json({ data, pageCount: 1 });
        }
      })

      .catch(error => {
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
        return Listing.findListingByBIDS(bids)
          .then(listings => {
            response.json({ data, bids, listings, pageCount: 1 });
          })
          .catch(error => {
            response.json(error);
          });
      } else {
        response.json({ data, pageCount: 1 });
      }
    })
    .catch(error => {
      response.json({ error });
    });
});

module.exports = router;
