
const findBookByTitle = db => title =>
  db.book.findAll(
    { 
      where: { 
        title: {
          [db.Sequelize.Op.like]: '%' + title + '%'
        } 
      }
    }
  );

module.exports = db => ({
  findBookByTitle: findBookByTitle(db)
});