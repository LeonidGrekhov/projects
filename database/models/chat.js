module.exports = function(sequelize, DataTypes) {
  const chat = sequelize.define(
    'chat',
    {
      idchat: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user1: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'cascade',
        references: { model: 'user', key: 'uid' }
      },
      user2: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'cascade',
        references: { model: 'user', key: 'uid' }
      },
      chatRoomid: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'cascade',
        references: { model: 'chatRoom', key: 'idchatRoom' }
      }
    },
    {
      tableName: 'chat',
      timestamps: false
    }
  );
  chat.associate = db => {
    chat.hasMany(db.user, {
      foreignKey: 'uid'
    });
    chat.hasOne(db.chatRoom, {
      foreignKey: 'idchatRoom'
    });
  };
  return chat;
};
