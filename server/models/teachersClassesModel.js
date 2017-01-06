const db = require('../database/db');
require('./classModel');

const TeachersClasses = db.Model.extend({
  tableName: 'teachers_classes',
  hasTimestamps: true,
  class() {
    return this.hasMany('Class', 'teacher_id');
  },
});

module.exports = db.model('TeachersClasses', TeachersClasses);
