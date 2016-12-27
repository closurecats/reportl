const router = require('express').Router();
const classController = require('../controllers/classController');

router.get('/:id', classController.getClassById);
router.get('/', classController.getAllClass);
router.post('/', classController.newClass);
router.delete('/:id', classController.deleteClass);

module.exports = router;