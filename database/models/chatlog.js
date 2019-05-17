module.exports = function(sequelize, DataTypes) {
  const chatLog = sequelize.define(
    'chatLog',
    {
      logid: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      message: {
        type: DataTypes.STRING(500)
      },
      idchatRoom: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'cascade',
        references: { model: 'chatRoom', key: 'idchatRoom' }
      }
    },
    {
      tableName: 'chatLog',
      timestamps: false
    }
  );
  chatLog.associate = db => {
    chatLog.hasOne(db.chatRoom, {
      foreignKey: 'idchatRoom'
    });
  };
  return chatLog;
};
