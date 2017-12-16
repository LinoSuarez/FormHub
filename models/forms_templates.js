module.exports = function(sequelize, DataTypes) {
    var FormTemplates = sequelize.define("FormTemplates", {
      formName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      formRoute: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len:[1]
        }
      }
    }, {
      timestamps: false
    });

    return FormTemplates;
  };