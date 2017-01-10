const router = require('express').Router();
const attendanceController = require('../controllers/attendanceController');

router.get('/meeting/:id', attendanceController.getByMeetingId);
router.put('/:id', attendanceController.markUserPresent);
router.put('/absent/:id', attendanceController.markUserAbsent);
// router.get('/user/', attendanceController.getUserAttendance);
// router.get('/', attendanceController.getAll);
// router.post('/', attendanceController.addMeeting);
// router.delete('/:id', attendanceController.deleteMeeting);

module.exports = router;
