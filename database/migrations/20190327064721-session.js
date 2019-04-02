'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('session', {
      sid: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      sess: {
        type: Sequelize.JSON,
        allowNull: false
      },
      expire: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }),

  down: (queryInterface, _) => queryInterface.dropTable('session')
};
