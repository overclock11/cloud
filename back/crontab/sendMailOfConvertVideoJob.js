module.exports = {
    run : function(){
        console.log('Tareas de envio de correo');
		Mailer.sendWelcomeMail("fcaptuayo", "captuayonovoafredy@sabit.co");  // <= Here we using
    }
};