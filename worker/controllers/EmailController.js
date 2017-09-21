var VideoModel = require('../models/video');
var nodemailer = require('nodemailer');
var config = require('../config');


// email sender function
exports.sendEmail = function(id, emailUser, url_master){

    console.log("va a enviar correo a " + emailUser);
    // Definimos el transporter
        var transporter = nodemailer.createTransport(config.awsSES);
    // Definimos el email
    var mailOptions = {
        from: config.configMailFrom.from ,
        to: emailUser,
        subject: config.configMailFrom.subject,
        text: config.configMailFrom.text
    };

    // Enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        } else {
            console.log("Email sent");

            VideoModel.updateConvertVideo(id, url_master, function(error, data) {
                if(data) {
                   console.log("Update succes");
                } else {
                   console.log("Error update");

                }
              });
        }
    });
};
