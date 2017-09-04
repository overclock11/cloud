module.exports.sendWelcomeMail = function(username,mail) {
	sails.hooks.email.send(
	  "testEmail",
	  {
	    recipientName: username,
	    senderName: mail
	  },
	  {
	    to: mail,
	    subject: username
	  },
	  function(err) {console.log(err || "It worked!");}
	)
}