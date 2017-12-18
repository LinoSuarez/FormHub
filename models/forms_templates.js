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

  // If you need to add the formRoutes to properly test, simply run this
  // in your db query:

// INSERT INTO FormTemplates (formName, formRoute)
// VALUES 
// ("new_patient", "new_patient"),
// ("medical_history", "medical_history");