var form1 = document.getElementById('testbtn');
  
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
        $('#testbtn').prop('disabled', true);
    } else {
        $('#testbtn').prop('disabled', false);
    }
});
