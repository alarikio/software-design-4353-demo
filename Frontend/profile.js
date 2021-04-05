
var form1 = document.getElementById('submitButton');

function myFunction3() {
    if (form1.checkValidity()) {
      alert("Profile Saved!");
    }

  }

  
$('.login').on('keyup change', function() {
    var empty = false;
    var zipcode = $("#zip");
    $('.login').each(function() {
        if ($(this).val() == '') {
            empty = true;
        }

        if (zipcode.val().length < 5 || !$.isNumeric(zipcode.val())) {
          empty = true;
        }
    });

    if (empty) {
        $('#submitButton').prop('disabled', true);
    } else {
        $('#submitButton').prop('disabled', false);
    }
});

