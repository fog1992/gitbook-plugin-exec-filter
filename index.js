var exec = require('exec');

module.exports = {
  filters: {
    command: function(command) {
      return exec(command).output;
    }
  }
};