const db = require('../database/db');
require('./classModel');
require('./calendarModel');

const Meeting = db.Model.extend({
  tableName: 'meetings',
  hasTimestamps: true,
  class() {
    return this.belongsTo('Class', 'class_id');
  },
  calendarDay() {
    return this.belongsTo('Calendar');
  },
});

module.exports = db.model('Meeting', Meeting);
