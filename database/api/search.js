const findBookByTitle = db => title => {
  var splitString = title.split(" ");
  console.log(splitString);

  console.log('***************debug:start:')
  console.log(db.Sequelize.Op.or)
  
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
  console.log(where);
  console.log('***************debug:end:')
  
  /*
  return db.book.find(
    { 
      where: { 
        title: {
          [db.Sequelize.Op.like]: {
            [db.Sequelize.Op.any]: splitString
          }
        } 
      }
    }
  );
  */
  return db.book.findAll({where});
};
   


module.exports = db => ({
  findBookByTitle: findBookByTitle(db)
});