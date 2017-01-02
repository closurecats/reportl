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
    return this.belongsTo('Department', 'department_id');
  },
  course() {
    return this.belongsTo('Course', 'course_id');
  },
  classes() {
    return this.belongsTo('Class', 'class_id');
  },
  gradeableobjects() {
    return this.belongsTo('GradeableObjectModel', 'gradeableobject_id');
  },
  gradeableobjecttypes() {
    return this.belongsTo('GradeableObjectType', 'gradeableobjecttype_id');
  },
  users() {
    return this.belongsTo('User', 'student_id');
  },
});

module.exports = db.model('GraphModel', GraphModel);
