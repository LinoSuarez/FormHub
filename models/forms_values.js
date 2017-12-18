module.exports = function(sequelize, DataTypes) {
    var FormVals = sequelize.define("FormVals", {
      formRoute: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      value: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    },
    {
      timestamps: false
    });

    return FormVals;
  };