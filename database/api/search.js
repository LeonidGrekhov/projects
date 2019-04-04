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
   


module.exports = db => ({
  findBookByTitle: findBookByTitle(db)
});