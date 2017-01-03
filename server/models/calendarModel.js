const db = require('../database/db');
require('./meetingModel');

const Calendar = db.Model.extend({
  tableName: 'calendar',
  hasTimestamps: true,
  meetings() {
    return this.hasMany('Meeting', 'calendar_day');
  },
});

module.exports = db.model('Calendar', Calendar);
