module.exports = function(sequelize, DataTypes) {
    var Ptform = sequelize.define("Patform", {
      FirstName: {
// We cannot store objects in the database. But we can
// stringify what we collect from the user and parse
// back out when we return it. 
        type: DataTypes.STRING,
        allowNull: false
        // validate: {
        //   len: [1]
  //       },
		// MiddleName: {
		// 	type: DataTypes.STRING,
		// 	allowNull: false
		// },
		// LastName: {
		// 	type: DataTypes.STRING,
		// 	allowNull : false
		// },
		// emPhoneNum: {
		// 	type: DataTypes.STRING,
		// 	allowNull : false
		}


      
    });

    return Ptform;
  }





// module.exports = function (sequelize, DataTypes){
// 	var Ptform = sequelize.define("Patform", {
// 		FirstName: {
// 			type: DataTypes.STRING,
// 			  // allowNull: false

// 		},
// 		MiddleName: {
// 			type: DataTypes.STRING,
// 			// allowNull: false
// 		},
// 		LastName: {
// 			type: DataTypes.STRING,
// 			// allowNull : false
// 		},
// 		emPhoneNum: {
// 			type: DataTypes.STRING,
// 			// allowNull : false
// 		}

// 	});
// 	return Ptform;
// };








