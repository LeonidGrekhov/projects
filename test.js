const router = require('express').Router();

const { Rating } = require('C:/Users/edwin/csc648-sp19-team244/database/api');

// router.put('/api/book/rating', (req, res) => {
//   const { bid, rating } = req.body;
var uid = 84;
var rating = 5;
return Rating.updateUserRating(uid, rating)
  .then(data => {
    return response.json(data);
  })
  .catch(_ => {
    return response.json(null);
  });
// .then(user => {
//     console.log("Good");
// })
// .catch(e => {
//     console.log(e);
// });

module.exports = router;
