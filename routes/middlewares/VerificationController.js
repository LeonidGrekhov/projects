const { models } = require('../../database/models');

const VerificationController = (req, res) => {
  return models.user
    .find({
      where: { email: req.query.email }
    })
    .then(user => {
      if (user.isVerified) {
        return res.status(202).json('Email Already Verified');
      } else {
        return models.verifcationToken
          .find({
            where: { token: req.query.verificationToken }
          })
          .then(foundToken => {
            if (foundToken) {
              return user
                .update({ isVerified: true })
                .then(updatedUser => {
                  return res
                    .status(403)
                    .json('User with ${user.email} has been verified');
                })
                .catch(reason => {
                  return res.status(403).json('Verification failed');
                });
            }
          });
      }
    })
    .catch(reason => {
      return res.status(404).json('Email not found');
    });
};

module.exports = VerificationController;
