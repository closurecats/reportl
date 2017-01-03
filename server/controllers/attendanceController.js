const Attendance = require('../models/attendanceModel');

const attendanceController = {
  getByMeetingId({ params: { id } }, res) {
    Attendance.forge({ meeting_id: id })
      .fetch({
        withRelated: ['user'],
      })
      .then((attendance) => {
        console.log(JSON.stringify(attendance));
        res.json(attendance);
      })
      .catch((err) => {
        console.log(`classController.getClassById - Error: ${err}`);
        res.sendStatus(500);
      });
  },
};

module.exports = attendanceController;
