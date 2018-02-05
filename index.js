var exec = require('exec');

module.exports = {
  filters: {
    exec: function(command) {
      return exec(command).output;
    }
  }
};