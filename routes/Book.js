const router = require('express').Router();
const { Book } = require('../database/api');

router.get('/api/book/:bid', ({ params: { bid } }, response) => {
  return Book.getBookData(parseInt(bid))
    .then(data => response.json(data))
    .catch(error => response.json(error));
});

router.post('/api/book/carousel', (request, response) => {
  return Book.getBookDataCarousel()
    .then(data => response.json(data))
    .catch(error => response.json(error));
});

module.exports = router;