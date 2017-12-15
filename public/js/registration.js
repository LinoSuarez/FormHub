$("#add-btn").on("click", function(event) {
  event.preventDefault();

  var newUser = {
    name: $("#name").val().trim(),
    email: $("#email").val().trim(),
    username: $("#username").val().trim(),
    password: $("#password").val().trim(),
<<<<<<< HEAD
    designation: $("#designation").val(),
=======
    designation: $("#designation").val()
>>>>>>> doctor-front2
  };

  $.post("/api/user/new", newUser)
    .done(function(data) {
      token.set(data);

      username.set(newUser.username)
      window.location = "/";
    });

  $("#name").val("");
  $("#email").val("");
  $("#username").val("");
  $("#password").val("");
<<<<<<< HEAD
  $("#designation").val("Select.... ");
=======
  $("#designation").val("");
>>>>>>> doctor-front2

  });
