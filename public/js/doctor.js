var formNum = 5;

$("#formSubmit").on("click", function(){
   // var x = 
    
    var ids = [];
    for (var i = 1; i <= formNum; i++){
        if ($("input[form-id='" + i + "']").is(':checked')){
            ids.push(i)
        }
        
    }
    var email = $("#patientEmail").val();
    
    $.post("/api/patient/forms", {
        arrayForms: ids.toString(),
        email: email
    })
})