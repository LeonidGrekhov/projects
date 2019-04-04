const findBookByTitle = db => title => {
  var splitString = title.split(" ");
  
  let orValue = [];
  splitString.map( str => {
    let orValueInteration = {
      title: {
        [db.Sequelize.Op.like]: '%' + str + '%'
      }
    };
    orValue.push(orValueInteration);
  });
  let where = {
    [db.Sequelize.Op.or]: orValue
  }
  
  return db.book.findAll({where});
};
   

const findBookByAuthor = db => author => {
  var splitString = author.split(" ");
  console.log(splitString);

  console.log(db.Sequelize.Op.or)
  
  let orValue = [];
  splitString.map( str => {
    let orValueInteration = {
      author: {
        [db.Sequelize.Op.like]: '%' + str + '%'
      }
    };
    orValue.push(orValueInteration);
  });
  let where = {
    [db.Sequelize.Op.or]: orValue
  }
  console.log(where);
 
  return db.book.findAll({where});
};

const findBookByISBN = db => isbn => {
  console.log(isbn);

  return db.book.findAll({
    where: {
      isbn: {
        [db.Sequelize.Op.like]: '%' + isbn + '%'
      }
    }
  });
}

module.exports = db => ({
  findBookByTitle: findBookByTitle(db),
  findBookByAuthor: findBookByAuthor(db),
  findBookByISBN: findBookByISBN(db)
});