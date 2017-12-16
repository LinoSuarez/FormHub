module.exports = function(sequelize, DataTypes) {
    var FormVals = sequelize.define("FormVals", {
      formId: {
        type:DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1,5]
        }
      },
      value: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      }
    });

    return FormVals;
  };