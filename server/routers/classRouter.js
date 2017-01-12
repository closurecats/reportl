const router = require('express').Router();
const classController = require('../controllers/classController');

router.get('/:id', classController.getClassById);
router.get('/', classController.getAll);
router.post('/createclass', classController.makeNewClass);
router.put('/:id', classController.updateClassById);
router.delete('/:id', classController.deleteClass);

module.exports = router;
