const getBookData = db => bid => db.book.findByPk(bid);

//Recomendations for carousel returns 5 books from the database
const getBookDataCarousel = db => () => {
  return db.book.findAll({ limit: 5 });
};

module.exports = db => ({
  getBookData: getBookData(db),
  getBookDataCarousel: getBookDataCarousel(db)
});
