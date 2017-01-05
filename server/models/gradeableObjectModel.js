const db = require('../database/db');
require('./gradeableObjectModelType');
require('./moduleModel');
require('./fileModel');
require('./meetingModel');

const GradeableObjectModel = db.Model.extend({
  tableName: 'gradeable_objects',
  hasTimestamps: false,
  module() {
    return this.belongsTo('Module', 'module_id');
  },
  meeting() {
    return this.belongsTo('Meeting');
  },
  type() {
    return this.belongsTo('GradeableObjectType', 'type_id');
  },
  file() {
    return this.hasMany('File', 'file_id');
  },
});

module.exports = db.model('GradeableObjectModel', GradeableObjectModel);
