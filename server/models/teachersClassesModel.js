const db = require('../database/db');

const TeachersClasses = db.Model.extend({
  tableName: 'teachers_classes',
  hasTimestamps: true,
});

module.exports = db.model('TeachersClasses', TeachersClasses);
