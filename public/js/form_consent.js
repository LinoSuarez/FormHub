$(document).on("click", "#submit_form", function(event) {

// $("#submit_form").on("click", function (event){
	event.preventDefault();
	var completed = false;
	
	var newConsent = {
		val:
	{	
		consentYesNo:$(".consentYesNo").val().trim(),
		FirstName : $("#FirstName").val().trim(),
		LastName: $("#LastName").val().trim(),
		consentMonth: $(".consentMonth").val(),
		consentDay: $(".consentDay").val(),
		consentYear: $(".consentYear").val(),
	
	},
	completed:completed
	}

	setRoute("consent");

	
	$.post("/api/form/consent", newConsent).done(function(data){
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