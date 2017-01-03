const db = require('../database/db');
require('./userModel');
require('./classModel');

const Meeting = db.Model.extend({
  tableName: 'Meetings',
  hasTimestamps: true,
  attendees() {
    return this.hasMany('User');
  },
  class() {
    return this.belongsTo('Class');
  },
});

module.exports = db.model('Meeting', Meeting);
