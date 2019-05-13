const router = require('express').Router();
const { Rating } = require('../database/api/');

router.put('/api/book/rating', (req, res) => {
  const { bid, rating } = req.body;

  return Rating.updateBookRating(bid, rating)
    .then(book => {
      res.json({ book });
    })
    .catch(e => {
      res.json(e);
    });
});

router.put('/api/user/rating', (req, res) => {
  const { uid, rating } = req.body;

  return Rating.updateUserRating(uid, rating)
    .then(user => {
      res.json({ user });
    })
    .catch(e => {
      res.json(e);
    });
});

module.exports = router;
