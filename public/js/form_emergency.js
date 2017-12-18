$(document).on("click", "#submit_form", function(event) {

	event.preventDefault();
	
	var newEmergency = {
		FirstName : $("#FirstName").val().trim(),
		MiddleName:$("#MiddleName").val().trim(),
		LastName: $("#LastName").val().trim(),
		PhoneNum: $("#PhoneNum").val().trim(),
		email:$("#email").val().trim(),
		emFirstName:$("#emFirstName").val().trim(),
		emLastName : $("#emLastName").val().trim(),
		emPhoneNum: $("#emPhoneNum").val().trim(),
		emEmail: $("#emEmail").val(),
		emStreetAddress: $("#emStreetAddress").val(),
		emStreetAddress2: $("#emStreetAddress2").val(),
		emCityAddress: $("#emCityAddress").val(),
		emStateAddress: $("#emStateAddress").val(),
		emPostalCode: $("#emPostalCode").val(),
		emCountryForm:$(".emCountryForm").val(),
		relation:$(".relation").val(),
	
	};
	$.post("/api/form/emergency", newEmergency).done(function(data){
		console.log(data);
	});

});