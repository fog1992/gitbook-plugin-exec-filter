const execSync = require('child_process').execSync;
const trim = require('trim-whitespace');
const trimNewlines = require('trim-newlines');

module.exports = {
  filters: {
    command: function(command) {
      var output = execSync(command).toString();
      output = trimNewlines(output);
      return trim(output);
    }
  }
};
