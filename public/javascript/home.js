$(document).ready(function(){
    $("#submit-post").click(function(){
        var content = $("#content").val();
        $.get('/getNewPost?content=' + content, content, function(result){
            $("#posts").append(result);
        });
        $("#content").val('');
    });
    $(".upvote").click(function(){
        var upvotes = $("#sheesh-count").val();
        console.log(upvotes);
        $("#sheesh-count").val(upvotes++);
    });
});