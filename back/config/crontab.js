module.exports.crontab = {

  /*
   * The asterisks in the key are equivalent to the
   * schedule setting in crontab, i.e.
   * minute hour day month day-of-week year
   * so in the example below it will run every minute
   */

  '55 01 * * * *': function(){
      require('../crontab/convertVideoJob.js').run();
  }
    /*'* * * * * *': function(){
      require('../convertVideoJobntab/sendMailOfConvertVideoJob.js').run();
  }*/
};