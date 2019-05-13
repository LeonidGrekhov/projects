const updateBookRating = db => (bid, rating) => {
  return db.book.update(
    {
      rating: rating
    },
    { where: { bid } }
  );
};

const updateUserRating = db => (uid, rating) => {
  return db.user.update(
    {
      rating: rating
    },
    { where: { uid } }
  );
};

module.exports = db => ({
  updateBookRating: updateBookRating(db),
  updateUserRating: updateUserRating(db)
});
