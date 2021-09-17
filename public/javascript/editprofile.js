$(document).ready(function(){
    $('#updateUsername').keyup(function(){
        var username = $("#updateUsername").val();
        $.get("/getCheckNewUsername?username=" + username, {username: username}, function(result){
            if(result.username == username){
                $("#updateUname-error").text("This username is already taken");
                $("#submit-new-username").prop('disabled', true);
            }
            else{
                $("#updateUname-error").text("This username is available");
                $("#submit-new-username").prop('disabled', false);
            }
        });
    });

    $("#updatePassword").keyup(function(){
        if($(this).val().length >= 8){
            $("#updatePw-error").text("This password is valid");
            $("#submit-new-password").prop("disabled", false);
        }
        else{
            $("#updatePw-error").text("This password must be 8 or more characters long");
            $("#submit-new-password").prop("disabled", true);
        }
    });

    $("#submit-new-bio").hover(function(){
        if($("#updateBio").val() != ""){
            $("#updateBio-error").text("valid bio");
            $("#submit-new-bio").prop('disabled', false);
        }
        else{
            $("#updateBio-error").text("invalid bio");
            $("#submit-new-bio").prop('disabled', true);
        }
    });
});