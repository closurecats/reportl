const db = require('../database/db');
require('./gradeableObjectModel');

const File = db.Model.extend({
  tableName: 'files',
  hasTimestamps: true,
  module() {
    return this.belongsTo('Module', 'module_id');
  },
});

module.exports = db.model('File', File);
