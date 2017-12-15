$("#add-btn").on("click", function(event) {
  event.preventDefault();

  var newUser = {
    name: $("#name").val().trim(),
    email: $("#email").val().trim(),
    username: $("#username").val().trim(),
    password: $("#password").val().trim(),
    designation: $("#designation").val(),
  };

  $.post("/api/user/new", newUser)
    .done(function(data) {

      window.location = "/";
    });

  $("#name").val("");
  $("#email").val("");
  $("#username").val("");
  $("#password").val("");
  $("#designation").val("Select.... ");

  });
