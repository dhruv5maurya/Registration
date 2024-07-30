
    function Validate(){
       
        var userName= document.getElementById("UserName").value;
        var paswword= document.getElementById("Paswword").value;
        var confirmPassword= document.getElementById("ConfirmPassword").value;
        var phoneNumber= document.getElementById("PhoneNumber").value;
        var emailId= document.getElementById("EmailId").value;
        
        debugger;
        document.getElementById("ValidateUser").innerHTML='';
        document.getElementById("ValidatePassword").innerHTML='';
        document.getElementById("ValidateConfirmPassword").innerHTML='';
        document.getElementById('ValidateEmail').innerHTML='';
        document.getElementById('ValidatePhone').innerHTML='';

        if(userName=='')
    {
       document.getElementById("ValidateUser").innerHTML="** please enter user name";
    }
    // else if(userName.indexOf(" ") < 0)
    //     {
    //        document.getElementById('ValidateUser').innerHTML="user name space not allowed"
    //     }
    if(paswword=='')
    {
        document.getElementById("ValidatePassword").innerHTML="** please enter password";
    }
    if(confirmPassword=='')
    {
        document.getElementById("ValidateConfirmPassword").innerHTML="** please enter confirm password";
    }
    if(paswword !=confirmPassword){
        document.getElementById("ValidateConfirmPassword").innerHTML="** Password mismatch"; 
    }
    if(isNaN(phoneNumber)){
        document.getElementById('ValidatePhone').innerHTML="phone number allow only digits"
    }
    else if(phoneNumber.length !=10){
        document.getElementById('ValidatePhone').innerHTML="phone number must be 10 digits"
    }
    //  if(emailId.indexOf("@") <=0)
    //  {
    //     document.getElementById('ValidateEmail').innerHTML="invalid email id"
    //  }
    //  else 
    // if(emailId.charAt(emailId.length-3) !='.')
    //  {
    //     document.getElementById('ValidateEmail').innerHTML="invalid email id"
    //  }
        
    }
