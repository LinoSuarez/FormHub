$(document).on("click", "#submit_form", function(event) {

// $("#submit_form").on("click", function (event){
	event.preventDefault();
	// console.log("are u working?");
	var newPt = {
		FirstName : $("#FirstName").val().trim(),
		MiddleName : $("#MiddleName").val().trim(),
		LastName: $("#LastName").val().trim(),
		emPhoneNum: $("#emPhoneNum").val().trim(),
		// selectGender: $("select.ptGenderForm:checked").val().trim()
	};

	var formId = 1;
	$.post("/api/form/registration", newPt).done(function(data){
		console.log(data);
	});
	$("#FirstName").val("");
	$("#MiddleName").val("");
	$("#LastName").val("");
	$("#emPhoneNum").val("")
});