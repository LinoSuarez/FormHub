$(document).on("click", "#submit_form", function(event) {

// $("#submit_form").on("click", function (event){
	event.preventDefault();
	
	var newConsent = {
		consentYesNo:$(".consentYesNo").val().trim(),
		FirstName : $("#FirstName").val().trim(),
		LastName: $("#LastName").val().trim(),
		consentMonth: $(".consentMonth").val(),
		consentDay: $(".consentDay").val(),
		consentYear: $(".consentYear").val(),
	
	};
	$.post("/api/form/consent", newConsent).done(function(data){
		console.log(data);
	});
	// $("#FirstName").val("");
	// $("#MiddleName").val("");
	// $("#LastName").val("");
	// $("#emPhoneNum").val("")
});