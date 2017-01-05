const db = require('../database/db');
require('./classModel');
require('./calendarModel');
require('./gradeableObjectModel');

const Meeting = db.Model.extend({
  tableName: 'meetings',
  hasTimestamps: true,
  class() {
    return this.belongsTo('Class', 'class_id');
  },
  calendarDay() {
    return this.belongsTo('Calendar');
  },
  gradeable_objects() {
    return this.hasMany('GradeableObjectModel', 'meeting_id');
  },
});

module.exports = db.model('Meeting', Meeting);
