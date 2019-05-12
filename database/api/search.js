const findBookByTitle = db => title => {
  var splitString = title.split(' ');

  let orValue = [];
  splitString.map(str => {
    let orValueInteration = {
      title: {
        [db.Sequelize.Op.like]: '%' + str + '%'
      }
    };
    orValue.push(orValueInteration);
  });
  let where = {
    [db.Sequelize.Op.or]: orValue
  };

  // SQL Statement here; Sequelize allows us to avoid raw SQL queries.
  return db.book.findAll({ where });
};

const findBookByAuthor = db => author => {
  var splitString = author.split(' ');

  let orValue = [];
  splitString.map(str => {
    let orValueInteration = {
      author: {
        [db.Sequelize.Op.like]: '%' + str + '%'
      }
    };
    orValue.push(orValueInteration);
  });
  let where = {
    [db.Sequelize.Op.or]: orValue
  };

  // SQL Statement here; Sequelize allows us to avoid raw SQL queries
  return db.book.findAll({ where });
};

const findBookByISBN = db => isbn => {
  // SQL statement here; Sequelize allows us to avoid raw SQL queries
  return db.book.findAll({
    where: {
      isbn: {
        [db.Sequelize.Op.like]: '%' + isbn + '%'
      }
    }
  });
};

const findBookByID = db => bid => {
  return db.book.findOne({
    where: {
      bid
    }
  });
};

module.exports = db => ({
  findBookByTitle: findBookByTitle(db),
  findBookByAuthor: findBookByAuthor(db),
  findBookByISBN: findBookByISBN(db),
  findBookByID: findBookByID(db)
});
