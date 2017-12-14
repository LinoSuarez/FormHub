module.exports = function(sequelize, DataTypes) {
    var Doctor = sequelize.define("Doctor", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      username: {
        type: DataTypes.STRING
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          len: [1]
      }
    });
    return Doctor;
  };