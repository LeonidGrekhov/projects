module.exports = function(sequelize, DataTypes) {
  const bookrating = sequelize.define(
    'bookrating',
    {
      brid: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      rating: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      bid: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'cascade',
        references: {
          model: 'user',
          key: 'uid'
        }
      }
    },
    {
      tableName: 'bookrating',
      timestamps: false
    }
  );
  return bookrating;
};
