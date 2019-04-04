
const findBookByTitle = db => title =>
  db.book.findOne({ where: { title } });

module.exports = db => ({
  findBookByTitle: findBookByTitle(db)
});