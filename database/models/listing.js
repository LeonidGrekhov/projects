/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'listing',
    {
      lid: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      bid: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'cascade',
        references: {
          model: 'book',
          key: 'bid'
        }
      },
      sid: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'cascade',
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
      },
      price: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      condition: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      imageurl: {
        type: DataTypes.STRING(200),
        allowNull: true
      }
    },
    {
      tableName: 'listing',
      timestamps: false
    }
  );
};
