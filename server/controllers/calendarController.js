const Calendar = require('../models/calendarModel');

const calendarController = {
  getAll(req, res) {
    Calendar.fetchAll({
      withRelated: ['meetings'],
    })
    .then(calendar => res.json(calendar))
    .catch((err) => {
      console.log(`Calendar.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },
};

module.exports = calendarController;
