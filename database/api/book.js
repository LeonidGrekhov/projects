const getBookData = db => bid => db.book.findByPk(bid);
module.exports = db => ({
  getBookData: getBookData(db)
});
