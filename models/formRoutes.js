module.exports = function(sequelize, DataTypes) {
    var FormRoues = sequelize.define("FormRoutes", {
// This will be the route of the form 
      formName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      formURL: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
          len: [1]
        }
      }

    });

    return FormRoutes;
  };