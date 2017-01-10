const Attendance = require('../models/attendanceModel');

const attendanceController = {
  getByMeetingId({ params: { id } }, res) {
    Attendance.where('meeting_id', id)
      .fetchAll({
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
  markUserPresent(req, res) {
    Attendance.forge({ id: req.params.id }, res)
      .fetch()
      .then(updatedAttendance => updatedAttendance.save({
        present: true,
      }))
      .then((updatedAttendanceInfo) => {
        console.log('New module', JSON.stringify(updatedAttendanceInfo));
        return res.json(updatedAttendanceInfo);
      })
      .catch((err) => {
        console.log(`attendanceController.markUserPresent - Error: ${err}`);
        res.sendStatus(500);
      })
      .catch((err) => {
        console.log(`attendanceController.markUserPresent - Error: ${err}`);
        res.sendStatus(500);
      });
  },
  markUserAbsent(req, res) {
    Attendance.forge({ id: req.params.id }, res)
      .fetch()
      .then(updatedAttendance => updatedAttendance.save({
        present: false,
      }))
      .then((updatedAttendanceInfo) => {
        console.log('New module', JSON.stringify(updatedAttendanceInfo));
        return res.json(updatedAttendanceInfo);
      })
      .catch((err) => {
        console.log(`attendanceController.markUserPresent - Error: ${err}`);
        res.sendStatus(500);
      })
      .catch((err) => {
        console.log(`attendanceController.markUserPresent - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  // getUserAttendance({ user }, res) {
  //   Attendance.forge({ student_id: user.id })
  //       withRelated: [
  //         {
  //           user(qb) {
  //             return qb.where('attendance.student_id', student_id.get('id'));
  //           },
  //         },
  //       ],
  //     })
  //     )
  //     .catch((err) => {
  //       console.log(`attendanceController.getUserAttendance - Error: ${err}`);
  //       res.sendStatus(500);
  //     })
  // },
};

module.exports = attendanceController;
