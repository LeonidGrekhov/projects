const moment = require('moment');
const fs = require('fs');
const AWS = require('aws-sdk');
const S3BucketName = 'litlister';

const S3 = new AWS.S3({
  accessKeyId: 'AKIAIEIL5AVK64ZY5ADQ',
  secretAccessKey: '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'
});

const createListing = db => (uid, bid, price, condition) =>
  db.listing.create({
    bid,
    sid: uid,
    created: moment().format(),
    price,
    condition
  });

const insertListing = db => (book, user, price, condition) => {
  return db.listing.create({
    bid: book.bid,
    sid: user.uid,
    created: moment().format(),
    price: price,
    condition: condition
  });
};

const updateListing = db => (lid, price, condition) =>
  db.listing.update(
    {
      price,
      condition,
      updated: moment().format()
    },
    { where: { lid } }
  );

//Deleting a listing
const deleteListing = db => lid => {
  return db.listing.destroy({ where: { lid } });
};

const findListingByBID = db => bid => {
  return db.listing.findAll({
    where: {
      bid
    }
  });
};

const findListingByBIDS = db => bids => {
  const Op = db.Sequelize.Op;
  return db.listing.findAll({
    where: {
      bid: {
        [Op.or]: bids
      }
    }
  });
};

const findListingByLID = db => lid =>
  db.listing
    .findOne({
      where: {
        lid
      }
    })
    .then(list =>
      db.user
        .findByPk(list.sid, { attributes: ['firstname', 'lastname'] })
        .then(seller => {
          return { list, seller };
        })
    );

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

//this function given promise support to S3.upload (AWS SDK function) which supports only callback
function S3UploadPromiseWraper(params) {
  return new Promise(function(resolve, reject) {
    S3.upload(params, (error, uploadData) => {
      if (error) {
        reject(error);
      } else {
        resolve(uploadData);
      }
    });
  });
}

// streamData - should be the buffer, for example the output of fs.readfile/ fs.readfileSync
const uploadListingImage = db => (lid, streamData, filename, extension) => {
  // to keep the coding style consistent, wrap the code inside of a promise, and return a promise
  return new Promise(function(resolve, reject) {
    //find if the given listing exists
    db.listing
      .findAll({
        where: {
          lid: lid
        }
      })
      .then(listingArray => {
        //check if we are uploading image for a single valid listing that exists in the system
        if (
          listingArray != null &&
          listingArray != undefined &&
          listingArray.length == 1
        ) {
          //initialize the object with given image parameters
          var params = {
            Bucket: S3BucketName,
            Key: 'listing/' + lid + '/' + filename + '.' + extension,
            Body: streamData,
            ContentType: 'image/' + extension
          };

          //call s3 upload wraper function
          return S3UploadPromiseWraper(params);
        }
      })
      .then(result => {
        //image upload is successful at this point, now update the 'imageurl' field for the given listing id.
        var imageURL = result.Location;
        return db.listing.update(
          {
            imageurl: imageURL,
            updated: moment().format()
          },
          { where: { lid } }
        );
      })
      .then(updatedListing => {
        //the listing has been updated successfully
        resolve(updatedListing);
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports = db => ({
  createListing: createListing(db),
  insertListing: insertListing(db),
  updateListing: updateListing(db),
  deleteListing: deleteListing(db),
  findListingByBID: findListingByBID(db),
  findListingByBIDS: findListingByBIDS(db),
  findListingByLID: findListingByLID(db),
  editPrice: editPrice(db),
  editCondition: editCondition(db),
  uploadListingImage: uploadListingImage(db)
});