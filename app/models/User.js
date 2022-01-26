var mongoose=require('mongoose');
var db = require('../config/database');

var userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    phone: String
});

userTable=mongoose.model('users',userSchema);
        
module.exports={
     createData:function(inputData, callback){
                  
        userData= new userTable(inputData);
        userData.save(function(err, data){
          if (err) throw err;
           return callback(data);
        });
     }
}