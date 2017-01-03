const db = require('../database/db');
require('./courseModel');
require('./moduleModel');
require('./userModel');

const Class = db.Model.extend({
  tableName: 'classes',
  hasTimestamps: true,
  course() {
    return this.belongsTo('Course');
  },
  modules() {
    return this.hasMany('Module', 'class_id');
  },
  users() {
    return this.belongsToMany('User', 'students_classes', 'class_id', 'student_id');
  },
});

module.exports = db.model('Class', Class);
