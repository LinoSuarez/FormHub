$(document).on("click", "#submit_new_patient", function(event) {

    // $("#submit_form").on("click", function (event){
        event.preventDefault();
         console.log("are u working?");
    
        var completed = false;
    
        // if ($("#FirstName").val().trim().length > 1 && $("#MiddleName").val().trim() && )
        var newPt = {
            patient: {
                FirstName : $("#FirstName").val().trim(),
                MiddleName : $("#MiddleName").val().trim(),
                LastName: $("#LastName").val().trim(),
                emPhoneNum: $("#emPhoneNum").val().trim()
            },
            completed: completed
        }
        setRoute("new_patient")
            // selectGender: $("select.ptGenderForm:checked").val().trim()
        
    
        $.post("/api/form/registration", newPt).done(function(data){
            console.log(data);
        });
        $("#FirstName").val("");
        $("#MiddleName").val("");
        $("#LastName").val("");
        $("#emPhoneNum").val("");
    
    
        function setRoute(route){
            var d = new Date();
            d.setTime(d.getTime() + (30*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = "formRoute" + "=" + route + ";" + expires + ";path=/";
        }
    });
    
    $(document).on("click", "#submit_form_history", function(event) {
        event.preventDefault();
      
        var completed = false;
        var condsVal = [];
        var sympVals = [];

        $(".condsVals:checked").each(function(i){
            condsVal[i] = $(this).val();
        })
        $(".sympVals:checked").each(function(i){
            sympVals[i] = $(this).val();
        })
        console.log(condsVal);
        console.log(sympVals);
    
        var value = {
            val: {FirstName: $("#FirstName").val().trim(),
            MiddleName: $("#MiddleName").val().trim(),
            LastName: $("#LastName").val().trim(),
            emPhoneNum: $("#emPhoneNum").val().trim(),
            email: $("#email").val().trim(),
            condsVal: condsVal,
            sympVals: sympVals,
            medz: $(".medz:checked").val(),
            gender: $('.ptGenderForm option:selected').text(),
            smoke: $(".smokez:checked").val(),
            drugs: $(".drugz:checked").val(),
            booze: $(".drankz:checked").val()
        },
            completed: completed
        };
    
        setRoute("medical_history");
        // alert(JSON.stringify(value))
        $.post("/api/form/history", value).done(function(data) {
        // console.log(data);
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
    

    $(document).on("click", "#submit_form_emergency", function(event) {
        // alert("ho")
        event.preventDefault();
        var completed = false;
    
        
        var newEmergency = {
            val: {
            FirstName : $("#FirstName").val().trim(),
            MiddleName:$("#MiddleName").val().trim(),
            LastName: $("#LastName").val().trim(),
            // PhoneNum: $("#PhoneNum").val().trim(),
            email:$("#email").val(),
            emFirstName:$("#emFirstName").val().trim(),
            emLastName : $("#emLastName").val().trim(),
            emPhoneNum: $("#emPhoneNum").val().trim(),
            emEmail: $("#emEmail").val(),
            emStreetAddress: $("#emStreetAddress").val(),
            emStreetAddress2: $("#emStreetAddress2").val(),
            emCityAddress: $("#emCityAddress").val(),
            emStateAddress: $("#emStateAddress").val(),
            emPostalCode: $("#emPostalCode").val(),
            emCountryForm:$(".emCountryForm").val(),
            relation:$(".relation").val(),
        
        },
        completed:completed
        };
    
        setRoute("form_emergency");
    
        $.post("/api/form/emergency", newEmergency).done(function(data){
            console.log(data);
        });
    
        function setRoute(route){
        var d = new Date();
        d.setTime(d.getTime() + (30*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "formRoute" + "=" + route + ";" + expires + ";path=/";
      }
    });
    $(document).on("click", "#submit_concent_form", function(event) {

        // $("#submit_form").on("click", function (event){
            event.preventDefault();
            var completed = false;
            
            var newConsent = {
                val:
            {	
                consentYesNo:$(".consentYesNo").val().trim(),
                FirstName : $("#FirstName").val().trim(),
                LastName: $("#LastName").val().trim(),
                consentMonth: $(".consentMonth").val(),
                consentDay: $(".consentDay").val(),
                consentYear: $(".consentYear").val(),
            
            },
            completed:completed
            }
        
            setRoute("consent");
        
            
            $.post("/api/form/consent", newConsent).done(function(data){
                console.log(data);
            });
            // $("#FirstName").val("");
            // $("#MiddleName").val("");
            // $("#LastName").val("");
            // $("#emPhoneNum").val("")
            function setRoute(route){
            var d = new Date();
            d.setTime(d.getTime() + (30*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = "formRoute" + "=" + route + ";" + expires + ";path=/";
          }
        
        });
        $(document).on("click", "#submit_insurance_form", function(event) {

            // $("#submit_form").on("click", function (event){
                event.preventDefault();
                var completed = false;
                
                var newInsurance = {
                val:
                {
                    FirstName : $("#FirstName").val().trim(),
                    MiddleName : $("#MiddleName").val().trim(),
                    LastName: $("#LastName").val().trim(),
                    ptPhoneNum: $("#emPhoneNum").val().trim(),
                    email:$("#email").val().trim(),
                    ptGenderForm: $(".ptGenderForm").val(),
                    ptBirthMonthForm: $(".ptBirthMonthForm").val(),
                    ptBirthDateForm: $(".ptBirthDateForm").val(),
                    ptBirthYearForm: $(".ptBirthYearForm").val(),
                    primaryInsurance1:$("#primaryInsurance1").val().trim(),
                    primaryInsurance2:$("#primaryInsurance2").val().trim(),
                    insCityAddress:$("#insCityAddress").val().trim(),
                    insStateAddress:$("#insStateAddress").val(),
                    insPostalCode:$("#insPostalCode").val().trim(),
                    policyNum:$("#policyNum").val().trim()
                },
            
                completed: completed
                    
                }
            
                setRoute("insurance");
            
                $.post("/api/form/insurance", newInsurance).done(function(data){
                    console.log(data);
                });
                // $("#FirstName").val("");
                // $("#MiddleName").val("");
                // $("#LastName").val("");
                // $("#emPhoneNum").val("")
            
                function setRoute(route){
                var d = new Date();
                d.setTime(d.getTime() + (30*24*60*60*1000));
                var expires = "expires="+ d.toUTCString();
                document.cookie = "formRoute" + "=" + route + ";" + expires + ";path=/";
              }
            });