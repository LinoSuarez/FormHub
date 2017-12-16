module.exports = function(sequelize, DataTypes) {
    var FormVals = sequelize.define("FormVals", {
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