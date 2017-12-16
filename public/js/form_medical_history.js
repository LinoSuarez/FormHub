 $("#submitForm").on("click", function(event) {
    event.preventDefault();
  
  var value = {
    FirstName: $("#FirstName").val().trim(),
    MiddleName: $("#MiddleName").val().trim(),
    LastName: $("#LastName").val().trim(),
    emPhoneNum: $("#emPhoneNum").val().trim(),
    email: $("#email").val().trim()

  };

  console.log(value);
  
  $.post("/api/form/history", value).done(function(data) {
    console.log(data);
    });

    $("#FirstName").val("");
    $("#MiddleName").val("");
    $("#LastName").val("");
    $("#emPhoneNum").val("");
    $("#email").val().trim("");
});
