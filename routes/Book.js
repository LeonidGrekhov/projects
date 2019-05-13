const router = require('express').Router();
const { Book } = require('../database/api');

router.get('/api/book/:bid', ({ params: { bid } }, response) => {
  return Book.getBookData(parseInt(bid))
    .then(data => response.json(data))
    .catch(error => console.log(error));
});

module.exports = router;
