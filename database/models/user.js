/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define(
    'user',
    {
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
        type: DataTypes.ENUM(
          'general',
          'buyer',
          'seller',
          'customerservice',
          'admin'
        ),
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
      },
      isVerified: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      classMethods: {
        associate: function(models) {
          User.hasOne(models.VerificationToken, {
            as: 'verificationtoken',
            foreignKey: 'uid',
            foreignKeyConstraint: true
          });
        }
      },
      timestamps: false,
      tableName: 'user'
    }
  );
  return User;
};
