const router = require('express').Router();
const calendarController = require('../controllers/calendarController');

router.get('/', calendarController.getAll);

module.exports = router;
