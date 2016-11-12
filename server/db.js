var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var appSchema = new Schema({  
  name:    { type: String },
  img:   { type: String }
});

var userSchema = new Schema({  
  username:    { type: String },
  password:   { type: String },
});

module.exports.App = mongoose.model('App', appSchema);
module.exports.User = mongoose.model('User', userSchema);        