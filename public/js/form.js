$(document).ready(function(){


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
  
  $.post("/api/new/form", value)
    .done(function(data) {

      console.log(data);
    });

    $("#FirstName").val().trim(),
    $("#MiddleName").val().trim(),
    $("#LastName").val().trim(),
    $("#emPhoneNum").val().trim(),
    $("#email").val().trim()
  
  });

 })