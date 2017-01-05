const router = require('express').Router();
const calendarController = require('../controllers/calendarController');

router.get('/', calendarController.getAll);
router.get('/interval', calendarController.getByRange);

module.exports = router;
