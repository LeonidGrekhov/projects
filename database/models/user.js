'use strict';
module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    'user',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        },
        unique: {
          args: true,
          msg: 'Email address already in use!'
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM,
        values: ['general', 'buyer', 'seller', 'customer service', 'admin'],
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  return user;
};
