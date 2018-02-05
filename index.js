const execSync = require('child_process').execSync;

module.exports = {
  filters: {
    command: function(command) {
      return execSync(command).toString();
    }
  }
};
