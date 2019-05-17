const { Listing } = require('./database/api');

return Listing.getListing(16)
  .then(data => {
    /*for (const user of data) {
      console.log(user.uid);
    }*/
    console.log(data.user);
  })
  .catch(error => console.log(error));
