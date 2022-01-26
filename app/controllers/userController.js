var insertModel= require('../models/User');
var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sanpadapraveen@gmail.com',
      pass: 'NodeMailCheck@12345'
    }
});

module.exports={
    createData:function(req, res){
         var inputData= req.body;
         var name = req.body.name;
         var username = req.body.username;
         var email = req.body.email;
         var phone = req.body.password;
         var password = req.body.password;
         
        bcrypt.hash(password, 10, function(err, hash) {

            insertModel.createData({
                "name": name,
                "username": username,
                "email": email,
                "password": hash,
                "phone": phone
            }, function(data){
                console.log(" record was created");

                var mailOptions = {
                    from: 'sanpadapraveen@gmail.com',
                    to: 'praveensanpada@gmail.com',
                    subject: 'Sending Email using Node.js',
                    text: 'Hello '+req.body.name+', Your Account Created Successfully!!!!.'
                };

                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                });

                res.status(201).json({
                    message: "User Created Successfully",
                    dataForm:req.body
                });
             });
        });
    }
}