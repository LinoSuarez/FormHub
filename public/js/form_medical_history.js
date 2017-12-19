$(document).on("click", "#submitForm", function(event) {
    event.preventDefault();
  
  var completed = false;

  var value = {
    val: {FirstName: $("#FirstName").val().trim(),
    MiddleName: $("#MiddleName").val().trim(),
    LastName: $("#LastName").val().trim(),
    emPhoneNum: $("#emPhoneNum").val().trim(),
    email: $("#email").val().trim()
  },
  completed: completed
  }

  setRoute("medical_history");

  alert(JSON.stringify(value))
  $.post("/api/form/history", value).done(function(data) {

    console.log(data);
    });

    $("#FirstName").val("");
    $("#MiddleName").val("");
    $("#LastName").val("");
    $("#emPhoneNum").val("");
    $("#email").val().trim("");

    function setRoute(route){
    var d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "formRoute" + "=" + route + ";" + expires + ";path=/";
  }
});
