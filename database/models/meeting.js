/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'meeting',
    {
      mid: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      location: {
        type: DataTypes.STRING(45),
        allowNull: false
      }
    },
    {
      tableName: 'meeting',
      timestamps: false
    }
  );
};
