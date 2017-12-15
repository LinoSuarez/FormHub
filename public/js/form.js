 $("submit").on("click", function(event) {
  event.preventDefault();

  var newFormOne = {
    firstName: $("#nameFirst").val().trim(),
    lastName: $("#nameLast").val().trim()
  };

  $.post("/api/formOne", newDr)
    .done(function(data) {

      console.log(data);
    });

  $("#nameFirst").val("");
  $("#nameLast").val("");
  
  });