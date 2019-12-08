


    $('#b').click(function(){
    event.preventDefault();
   var email = $('#username').val();
    var pass = $('#pass').val();

    if((ValidateEmail(email))&&(ValidaPassword(pass)))
    {
        $("#emailText").text('');
        $("#passText").text("");
        $("#overallText").text("Welcome back! You have successfully logged in");
        
    }

    });
   
    function ValidateEmail(inputText) // for the email
    {
         var re = /(\w+)\@(\w+)\.[a-zA-Z]/g;
        var emailValue =  document.getElementById("username").value;
        var testEmail = re.test(emailValue);
            if(inputText == "" || inputText == null)
      {
        $("#emailText").text('The Email field is empty');
          return false;
      }
      else{
         
          if(!testEmail)
          {
            $("#emailText").text('You have entered a invalid email address!');  
              return false;
          }
          else
          {
            return true;
          }   
    }
  }
   

function ValidaPassword(inputText){
  if(inputText == "" || inputText == null)
  {
    $("#passText").text("The password field is empty");
     return false;
  }
  else if (inputText.length>=3){
         return true;
  }
    else{
        $("#passText").text("Invalid! the password must be at least 3 characters.");
        return false;
    }
}
