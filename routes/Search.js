const router = require('express').Router();
const { Search } = require('../database/api');

router.get('/api/search/title/:titleString/page/:page', (request, response) => {
  console.log(request.params.titleString);
  var searchTerm = request.params.titleString;
  Search.findBookByTitle(searchTerm)
    .then(data => {
      console.log('here');
      console.log(data);
      response.json({ data, pageCount: 1 });
    })
    .catch(error => {
      console.log(error);
      response.json({ error });
    });
});

router.get(
  '/api/search/author/:authorString/page/:page',
  (request, response) => {
    console.log(request.params.authorString);
    var searchTerm = request.params.authorString;
    Search.findBookByAuthor(searchTerm)
      .then(data => {
        response.json({ data, pageCount: 1 });
      })
      .catch(error => {
        console.log(error);
        response.json({ error });
      });
  }
);

router.get('/api/search/isbn/:isbnString/page/:page', (request, response) => {
  console.log(request.params.isbnString);
  var searchTerm = request.params.isbnString;
  Search.findBookByISBN(searchTerm)
    .then(data => {
      response.json({ data, pageCount: 1 });
    })
    .catch(error => {
      console.log(error);
      response.json({ error });
    });
});

module.exports = router;
