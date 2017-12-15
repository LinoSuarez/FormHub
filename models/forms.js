module.exports = function(sequelize, DataTypes) {
    var Form = sequelize.define("Form", {
      value: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });

    return Form;
  };