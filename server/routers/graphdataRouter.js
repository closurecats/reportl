const router = require('express').Router();
const graphDataController = require('../controllers/graphDataController');

router.post('/:meetingId/:userId', graphDataController.addGrade);
router.get('/', graphDataController.getAll);

module.exports = router;
