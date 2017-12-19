$(document).on("click", "#submit_form", function(event) {

	event.preventDefault();
	  var completed = false;

	
	var newEmergency = {
		val: {
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
	
	},
	completed:completed
	};

	setRoute("form_emergency");


	$.post("/api/form/emergency", newEmergency).done(function(data){
		console.log(data);
	});

	function setRoute(route){
    var d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "formRoute" + "=" + route + ";" + expires + ";path=/";
  }
});