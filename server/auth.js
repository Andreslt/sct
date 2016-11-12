// auth.js
var mongoose = require('mongoose');  
var User = require('./db.js').User;  
var service = require('./service');

exports.signup = function(req, res) {
    var username = req.body.username, password=req.body.password; 
    console.log('username: '+username);
    console.log('password: '+password);
    var user = new User({
        username: username,
        password: password
    });

    user.save(function(err){
        return res
            .status(200)
            .send({token: service.createToken(user)});
    });
};

exports.login = function(req, res) {  
    var username = req.query.username, password=req.query.password;   
    User.findOne({username: username}, function(err, user) {
        console.log('usuario :'+user);
        return res
            .status(200)
            .send({token: service.createToken(user)});
    });
};