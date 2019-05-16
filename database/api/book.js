const getBookData = db => bid => db.book.findByPk(bid);

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
  addBook: addBook(db)
});
