module.exports = function(sequelize, DataTypes) {
    var Form = sequelize.define("form", {
      value: {
// We cannot store objects in the database. But we can
// stringify what we collect from the user and parse
// back out when we return it. 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });

    return Form;
  };