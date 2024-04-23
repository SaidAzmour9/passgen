$('#volume').on('input', function(){
    var value = $(this).val();
    $('#rangeValue').text(value);
});

$('#btn').on('click', function(){
    var lowers = 'abcdefghijklmnopqrstuvwxyz';
    var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '1234567890';
    var symbols = '`~!@#$%^&*()_-+={}[]\\|:;\"\'<>,.?/';
    var checks = $('#checks input:checked');  
    if (checks.length === 0) {
        alert("Please select at least one criteria.");
        return;
    }

    var selectedCriteria = '';
    checks.each(function() {
        var checkeds = $(this).attr('id');
        switch(checkeds) {
            case 'lowers':
                selectedCriteria += lowers;
                break;
            case 'uppers':
                selectedCriteria += uppers;
                break;
            case 'numbers':
                selectedCriteria += numbers;
                break;
            case 'symbols':
                selectedCriteria += symbols;
                break;
        }
    });

    var rangeVl = parseInt($('#volume').val());
    var password = '';
    for (var i = 0; i < rangeVl; i++) {
        var randomIndex = Math.floor(Math.random() * selectedCriteria.length);
        password += selectedCriteria[randomIndex];
    }
    $('#pass').text(password);
    $("#cop").click(function(){
        var valueToCopy = password;
        navigator.clipboard.writeText(valueToCopy);
    });
});


