const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const updateBookRating = db => (id, rating) => {
  var rate = db.bookrating.findAndCountAll({
    attributes: [rating],
    where: { bid: id }
  });
  console.log(rate);
  return db.book.update(
    {
      rating: rating
    },
    { where: { bid } }
  );
};

const updateUserRating = db => (uid, rating) => {
  var newrating = 0.0;
  var sum = db.userrating.sum('rating', { where: { uid: uid } }).then(sum => {
    sum = sum + rating;
    var count = db.userrating
      .count({ where: { uid: { [Op.eq]: uid } } })
      .then(count => {
        count = count + 1;
        console.log(sum);
        console.log(count);
        newrating = sum / count;
        Math.round(newrating);
        console.log(newrating);
        db.user.update({ rating: newrating }, { where: { uid: uid } });
      });
  });
  return db.userrating.create({ rating, uid });
};

module.exports = db => ({
  updateBookRating: updateBookRating(db),
  updateUserRating: updateUserRating(db)
});
