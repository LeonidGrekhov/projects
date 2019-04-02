'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('user', {
      uid: {
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
        unique: true,
        allowNull: false
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
    }),
  down: (queryInterface, _) => queryInterface.dropTable('user')
};
