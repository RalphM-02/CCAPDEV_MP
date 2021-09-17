$(document).ready(function(){
    $("#submit-post").click(function(){
        var content = $("#content").val();
        $.get('/getNewPost?content=' + content, content, function(result){
            $("#posts").append(result);
        });
        $("#content").val('');
    });
});