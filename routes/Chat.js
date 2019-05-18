const router = require('express').Router();

router.get('/api/:senderId/chat/:receiver', ({ params: {} }, response) => {
  return Book.getBookData(parseInt(bid))
    .then(data => response.json(data))
    .catch(error => response.json(error));
});

//Create and Update chat
// GET /api/chat/:rid
// PUT /api/chat/:rid
router.get('/api/chat/:rid', ({ params: {} }, response) => {
  //return
});

module.exports = router;
