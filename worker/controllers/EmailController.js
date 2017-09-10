var nodemailer = require('nodemailer');

// email sender function
exports.sendEmail = function(req, res){

console.log("va a enviar correo");
// Definimos el transporter
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'captuayonovoafredy@gmail.com',
            pass: 'Ti94113010260'
        }
    });
// Definimos el email
var mailOptions = {
    from: 'FcaptuayoSabit@sabit.co',
    to: 'jlian92@gmail.com',
    subject: 'Correo cargado exitosamesnte prueba 001',
    text: 'Correo convertido exitosamente, su video se encuentra disponible en la pagina oficial del concurso'
};
// Enviamos el email
transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
        res.send(500, err.message);
    } else {
        console.log("Email sent");
        res.status(200).jsonp(req.body);
    }
});
};