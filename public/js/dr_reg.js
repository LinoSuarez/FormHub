  $("#add-btn").on("click", function(event) {
  event.preventDefault();

  var newDr = {
    name: $("#dr_name").val().trim(),
    email: $("#dr_email").val().trim(),
    username: $("#dr_username").val().trim(),
    password: $("#dr_password").val().trim()
  };

  $.post("/api/doctors", newDr)
    .done(function(data) {

      console.log(data);
    });

  $("#dr_name").val("");
  $("#dr_email").val("");
  $("#dr_username").val("");
  $("#dr_password").val("");

  });
