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

});