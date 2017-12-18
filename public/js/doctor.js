var formNum = 5;

$("#formSubmit").on("click", function(){
    event.preventDefault();
   // var x = 
    // alert("hi")
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
    }).then(function(x){
        // console.log(x)
    })
})

$.post("/api/doctos/client/autocomplete").then(function(data){
										
    $( "#patientEmail" ).autocomplete({
        source: data
    });
})