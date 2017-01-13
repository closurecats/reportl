const Calendar = require('../models/calendarModel');

const calendarController = {
  getAll(req, res) {
    Calendar.fetchAll({
      withRelated: ['meetings.class'],
    })
    .then(calendar => res.json(calendar))
    .catch((err) => {
      console.log(`Calendar.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },

  getByRange({
    query: {
      from_day_of_month: startDay,
      from_month: startMonthName,
      to_month: endMonthName,
      to_day_of_month: endDay,
    },
  }, res) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const startMonth = months.indexOf(startMonthName) + 1;
    const endMonth = months.indexOf(endMonthName) + 1;

    Calendar.query((qb) => {
      qb.where((qBuilder1) => {
        if (startMonth !== endMonth) {
          qBuilder1.where('month_count', '>', startMonth)
            .andWhere('month_count', '<', endMonth)
            .orWhere((qBuilder2) => {
              qBuilder2.where('month_count', startMonth)
                .andWhere('day_of_month', '>=', startDay);
            })
            .orWhere((qBuilder3) => {
              qBuilder3.where('month_count', endMonth)
                .andWhere('day_of_month', '<=', endDay);
            });
        } else {
          qBuilder1.where('month_count', startMonth)
            .whereBetween('day_of_month', [startDay, endDay]);
        }
      });
    })
    .fetchAll({
      withRelated: [
        'meetings.class',
      ],
    })
    .then(calender => res.json(calender))
    .catch((err) => {
      console.log(`Calender.getByRange - Error: ${err}`);
      res.sendStatus(500);
    });
  },
};

module.exports = calendarController;
