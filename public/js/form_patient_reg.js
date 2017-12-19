$(document).on("click", "#submit_form", function(event) {

// $("#submit_form").on("click", function (event){
	event.preventDefault();
	console.log("are u working?");

	var completed = false;

	// if ($("#FirstName").val().trim().length > 1 && $("#MiddleName").val().trim() && )
	var newPt = {
		patient: {
			FirstName : $("#FirstName").val().trim(),
			MiddleName : $("#MiddleName").val().trim(),
			LastName: $("#LastName").val().trim(),
			emPhoneNum: $("#emPhoneNum").val().trim()
		},
		completed: completed
	}
	setRoute("new_patient")
		// selectGender: $("select.ptGenderForm:checked").val().trim()
	

	$.post("/api/form/registration", newPt).done(function(data){
		console.log(data);
	});
	$("#FirstName").val("");
	$("#MiddleName").val("");
	$("#LastName").val("");
	$("#emPhoneNum").val("");


	function setRoute(route){
		var d = new Date();
		d.setTime(d.getTime() + (30*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = "formRoute" + "=" + route + ";" + expires + ";path=/";
	}
});

