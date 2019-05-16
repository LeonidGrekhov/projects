const { Book } = require('./database/api');

return Book.getBookListings(1)
  .then(data => {
    for (const listing of data.Listings) {
      console.log(listing.uid);
    }
  })
  .catch(error => console.log(error));
