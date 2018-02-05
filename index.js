const execSync = require('child_process').execSync;
const trim = require('trim-whitespace');

module.exports = {
  filters: {
    command: function(command) {
      var output = execSync(command).toString();
      return trim(output);
    }
  }
};
