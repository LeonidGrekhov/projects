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

const editPrice = db => (lid, price) => {
  return db.listing.update(
    {
      price: price,
      updated: moment().format()
    },
    { where: { lid } }
  );
};

module.exports = db => ({
  insertListing: insertListing(db),
  deleteLisitng: deleteListing(db),
  editPrice: editPrice(db)
});
