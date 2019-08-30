const mongoose = require("mongoose");
const User = mongoose.model("User");

//CRUD functions added to module exports
module.exports = {

    fill_db: (user) => {
        var newUser = new User();

        newUser.name = user.name
        newUser.username = user.username
        newUser.phone = user.phone
        newUser.email = user.email
        newUser.website = user.website

        newUser.save((err, user) => {
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    },

    create_user: (req, res) => {

        //add user attributes
        var user = new User();
        user.name = req.body
        user.save((err, user) => {
            if(err){
                console.log(err);
                res.json({err: err});
            } else {
                res.json({user: user});
            }
        });
    },

    find_user: (req, res) => {

        User.findOne({username: req.body.username}, (err, user) => {
            if(err || !user){
                console.log(err);
            } else {
                res(user);
                return true
            }
        });
    }
    
}