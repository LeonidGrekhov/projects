const moment = require('moment');
const AWS = require('aws-sdk');
const S3BucketName = 'litlister';

const S3 = new AWS.S3({
  accessKeyId: 'AKIAIEIL5AVK64ZY5ADQ',
  secretAccessKey: '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'
});

//this function given promise support to S3.upload (AWS SDK function) which supports only callback
const S3UploadPromiseWraper = (lid, pic) => {
  const params = {
    Bucket: S3BucketName,
    Key: 'listing/' + lid + '/' + pic.filename + '.' + pic.extension,
    Body: pic.streamData,
    ContentType: 'image/' + pic.extension
  };
  return new Promise(function(resolve, reject) {
    S3.upload(params, (error, uploadData) => {
      if (error) {
        reject(error);
      } else {
        resolve(uploadData);
      }
    });
  });
};

const createListing = db => (uid, bid, price, condition, pic) =>
  pic
    ? db.listing
        .create({
          bid,
          uid,
          created: moment().format(),
          price,
          condition
        })
        .then(list =>
          resolve({
            result: S3UploadPromiseWraper(list.lid, pic),
            lid: list.lid
          }).then(({ result, lid }) =>
            db.listing.update(
              {
                imageurl: result.Location
              },
              { where: { lid } }
            )
          )
        )
    : db.listing.create({
        bid,
        uid,
        created: moment().format(),
        price,
        condition
      });

const updateListing = db => (lid, price, condition, pic) =>
  pic.deleted
    ? db.listing.update(
        {
          price,
          condition,
          imageurl: null,
          updated: moment().format()
        },
        { where: { lid } }
      )
    : pic.updated
    ? resolve({
        result: S3UploadPromiseWraper(list.lid, pic),
        lid: list.lid
      }).then(({ result, lid }) =>
        db.listing.update(
          {
            price,
            condition,
            imageurl: result.Location,
            updated: moment().format()
          },
          { where: { lid } }
        )
      )
    : db.listing.update(
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

// Retrieve a listing and its owner by pk
const getListing = db => lid =>
  db.listing.findByPk(lid, {
    include: [
      {
        model: db.book,
        as: 'Book'
      },
      {
        model: db.user,
        as: 'Seller',
        attributes: ['uid', 'firstname', 'lastname']
      },
      {
        model: db.meeting,
        as: 'Meeting'
      }
    ]
  });

module.exports = db => ({
  createListing: createListing(db),
  updateListing: updateListing(db),
  deleteListing: deleteListing(db),
  getListing: getListing(db)
});
