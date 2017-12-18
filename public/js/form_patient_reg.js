$(document).on("click", "#submit_form", function(event) {

// $("#submit_form").on("click", function (event){
	event.preventDefault();
	// console.log("are u working?");
	var newPt = {
		patient: {
			FirstName : $("#FirstName").val().trim(),
			MiddleName : $("#MiddleName").val().trim(),
			LastName: $("#LastName").val().trim(),
			emPhoneNum: $("#emPhoneNum").val().trim()
		}, 
		formRoute: getLastURLVal()
	}
		// selectGender: $("select.ptGenderForm:checked").val().trim()
	

	$.post("/api/form/registration", newPt).done(function(data){
		console.log(data);
	});
	$("#FirstName").val("");
	$("#MiddleName").val("");
	$("#LastName").val("");
	$("#emPhoneNum").val("")


	function getLastURLVal(){
		var url = location.href;
		url = url.split("/")
		return url.pop();
	}
});

