const router = require('express').Router();

router.get('/api/:senderId/chat/:receiver', ({ params: {} }, response) => {
  return Book.getBookData(parseInt(bid))
    .then(data => response.json(data))
    .catch(error => response.json(error));
});

module.exports = router;
