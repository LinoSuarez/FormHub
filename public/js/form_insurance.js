$(document).on("click", "#submit_form", function(event) {

// $("#submit_form").on("click", function (event){
	event.preventDefault();
	var completed = false;
	
	var newInsurance = {
	val:
	{
		FirstName : $("#FirstName").val().trim(),
		MiddleName : $("#MiddleName").val().trim(),
		LastName: $("#LastName").val().trim(),
		ptPhoneNum: $("#emPhoneNum").val().trim(),
		email:$("#email").val().trim(),
		ptGenderForm: $(".ptGenderForm").val(),
		ptBirthMonthForm: $(".ptBirthMonthForm").val(),
		ptBirthDateForm: $(".ptBirthDateForm").val(),
		ptBirthYearForm: $(".ptBirthYearForm").val(),
		primaryInsurance1:$("#primaryInsurance1").val().trim(),
		primaryInsurance2:$("#primaryInsurance2").val().trim(),
		insCityAddress:$("#insCityAddress").val().trim(),
		insStateAddress:$("#insStateAddress").val(),
		insPostalCode:$("#insPostalCode").val().trim(),
		policyNum:$("#policyNum").val().trim()
	},

	completed:complete
		
	}

	setRoute("insurance");

	$.post("/api/form/insurance", newInsurance).done(function(data){
		console.log(data);
	});
	// $("#FirstName").val("");
	// $("#MiddleName").val("");
	// $("#LastName").val("");
	// $("#emPhoneNum").val("")

	function setRoute(route){
    var d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "formRoute" + "=" + route + ";" + expires + ";path=/";
  }
});