
function getAddress() {
  try {

    alert('hi');
  }

   catch (err) {
    console.log(err);
  }




}
//Alert box displaying a user successfully submitted a form
  var form = document.getElementById('submitButton');

   function myFunction() {
     if (form.checkValidity()) {
       alert("Form Successfully Submitted!");
     }
   }

   var form1 = document.getElementById('submitButton');

//Alert box displaying a user has successfully registered an account
   function myFunction2() {
    if (form1.checkValidity()) {
      alert("Successfully Submitted");
    }
    
  }

//Alert box displaying a user has successfully saved their account
  function myFunction3() {
    if (form1.checkValidity()) {
      alert("Profile Saved!");
    }
    
  }
  function multiplyBy()
  {
          num1 = document.getElementById("SP").value;
          num2 = document.getElementById("GR").value;
          var result = document.getElementById('TAD'); 
          var myResult = num1 * num2;
          document.getElementById('TAD').value = myResult;
  }

 

$(function() {
    $('form > input[required]').on('input', function() {

        var empty = false;
        var gallons = $("#GR");

        $('form > input[required]').each(function() {
            if ($(this).val() == '' || $(this).val() <= 0) {
                empty = true;
            }
            
        });

        if (empty) {
            $('#submitButton').attr('disabled', 'disabled');
            $('#getQB').attr('disabled', 'disabled');

        } else {
            $('#submitButton').removeAttr('disabled');
            $('#getQB').removeAttr('disabled');
        }
    });
})()
