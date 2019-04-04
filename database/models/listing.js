/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('listing', {
    lid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    bid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    sid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'uid'
      }
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'listing',
    timestamps: false
  });
};
