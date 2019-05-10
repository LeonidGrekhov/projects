const moment = require('moment');

const insertListing = db => (book, user, price) => {
  return db.listing.create({
    bid: book.bid,
    sid: user.uid,
    created: moment().format(),
    price: price
  });
};

//Deleting a listing
const deleteListing = db => lid => {
  return db.listing.destroy({ where: { lid } });
};

const findListing = db => bids => {
  const Op = db.Sequelize.Op;
  return db.listing.findAll({
    where: {
      bid: {
        [Op.or]: bids
      }
    }
  });
};

const editPrice = db => (lid, price) => {
  return db.listing.update(
    {
      price: price,
      updated: moment().format()
    },
    { where: { lid } }
  );
};

const editCondition = db => (lid, condition) => {
  return db.listing.update(
    {
      condition: condition,
      updated: moment().format()
    },
    { where: { lid } }
  );
};

module.exports = db => ({
  insertListing: insertListing(db),
  deleteListing: deleteListing(db),
  findListing: findListing(db),
  editPrice: editPrice(db),
  editCondition: editCondition(db)
});
