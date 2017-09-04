// config/installedHooks.js
module.exports.installedHooks = {
   "sails-hook-email": {
      // load the hook into sails.hooks.emailHook instead of sails.hooks.email
      "name": "email",
      // configure the hook using sails.config.emailSettings instead of sails.config.email
      "configKey": "emailSettings"
   }
};