module.exports = function(sequelize, DataTypes) {
  const chatRoom = sequelize.define(
    'chatRoom',
    {
      idchatRoom: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      }
    },
    {
      tableName: 'chatRoom',
      timestamps: false
    }
  );
  return chatRoom;
};
