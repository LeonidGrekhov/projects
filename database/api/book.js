const getBookData = db => bid => db.book.findByPk(bid);

//Recomendations for carousel returns 5 books from the database
const getBookDataCarousel = db => () => {
  return db.book.findAll({ limit: 5, order: [['bid', 'DESC']] });
};

const addBook = db => (title, author, isbn, description, pictureurl, type) =>
  db.book.create({
    title,
    author,
    isbn,
    description,
    pictureurl,
    type
  });

module.exports = db => ({
  getBookData: getBookData(db),
  addBook: addBook(db),
  getBookDataCarousel: getBookDataCarousel(db)
});
