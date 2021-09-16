const homeController = {
    getHome: function(req, res){
        if(req.session.username){
            var details ={
                username: req.session.username
            };
            res.render("home", details)
        }
    }
}