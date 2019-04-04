/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('general','buyer','seller','customerservice','admin'),
      allowNull: false,
      defaultValue: 'general'
    },
    email: {
      type: DataTypes.STRING(330),
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'user'
  });
};
