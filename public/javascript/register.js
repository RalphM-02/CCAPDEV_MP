$(document).ready(function(){

    $('#username').keyup(function(){
        var username = $('#username').val();
        $.get('/getCheckUsername', {username: username}, function(result){
            if(result.username == username){
                $("#username-error").text('Username already registered');
                $("#register-submit").prop('disabled', true);
            }
            else{
                $("#username-error").text("Username is available");
                $("#register-submit").prop('disabled', false);
            }
        });
    });

    $('#password').keyup(function(){
        if($(this).val().length >= 8){
            $("#password-error").text("Password is valid");
            $("#register-submit").prop('disabled', false);
        }
        else{
            $("#password-error").text('Password must be 8 or more characters long');
            $("#register-submit").prop('disabled', true);
        }
    });

    $("#confirmpw").keyup(function(){
        if($("#password").val() != $("#confirmpw").val()){
            $("#confirmpw-error").text("Passwords do not match");
            $("#register-submit").prop('disabled', true);
        }
        else{
            $("#confirmpw-error").text("Passwords match");
            $("#register-submit").prop('disabled', false);
        }
    });

});