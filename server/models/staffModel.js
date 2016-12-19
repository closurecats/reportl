const db = require('../database/db');
const User = require('./userModel.js');

const Staff = db.Model.extend({
  tableName: 'staff',
  user() {
    return this.hasOne(User);
  },
  hasTimestamps: true,
});

module.exports = Staff;