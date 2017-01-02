const db = require('../database/db');
require('./departmentModel');
require('./courseModel');
require('./classModel');
require('./gradeableObjectModel');
require('./gradeableObjectModelType');

const GraphModel = db.Model.extend({
  tableName: 'graph_data',
  hasTimestamps: false,
  departments() {
    return this.hasMany('Department', 'department_id');
  },
  course() {
    return this.hasMany('Course', 'course_id');
  },
  classes() {
    return this.hasMany('Class', 'class_id');
  },
  gradeableobjects() {
    return this.hasMany('GradeableObjectModel', 'gradeableobject_id');
  },
  gradeableobjecttypes() {
    return this.hasMany('GradeableObjectType', 'gradeableobjecttype_id');
  },
  users() {
    return this.hasMany('User', 'student_id');
  },
});

module.exports = db.model('GraphModel', GraphModel);
