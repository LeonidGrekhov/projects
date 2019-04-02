const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const insertUser = db => (name, email, hash_me, type = 'general') =>
  bcrypt.hash(hash_me, SALT_ROUNDS).then(password =>
    db.user.create({
      name,
      email,
      password,
      type
    })
  );

const findUserByEmail = db => email =>
  db.user.findOne({ where: { email } });

const findUserById = db => id => db.user.findOne({ where: { id } });

const updatePassword = db => (email, new_password) =>
  bcrypt
    .hash(new_password, SALT_ROUNDS)
    .then(hash => db.user.update({ password: hash }, { where: { email } }));

const insertSession = db => (sid, data, expire) =>
  db.session.create({
    sid,
    data,
    expire
  });

const deleteSession = db => sid => db.session.destroy({ where: { sid } });

const findSessionBySid = db => sid => db.session.findOne({ where: { sid } });

module.exports = db => ({
  insertUser: insertUser(db),
  findUserByEmail: findUserByEmail(db),
  findUserById: findUserById(db),
  updatePassword: updatePassword(db),
  insertSession: insertSession(db),
  deleteSession: deleteSession(db),
  findSessionById: findSessionBySid(db)
});
