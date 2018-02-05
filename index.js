const execSync = require('child_process').execSync;
const trim = require('trim-whitespace');
const trimNewlines = require('trim-newlines');

module.exports = {
  filters: {
    exec: function(command) {
      var output = execSync(command).toString();
      
      for (var i = 0; i <= 3; i++) {
        output = trimNewlines(output);
        output = trim(output);
      }
      
      return output;
    }
  }
};
