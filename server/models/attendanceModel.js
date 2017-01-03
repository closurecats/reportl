const db = require('../database/db');

const Attendance = db.Model.extend({
  tableName: 'attendance',
  hasTimestamps: true,
  user() {
    return this.belongsToMany('User', 'attendance', 'meeting_id', 'student_id');
  },
  meeting() {
    return this.belongsTo('Meeting', 'meeting_id');
  },
});

module.exports = db.model('Attendance', Attendance);
