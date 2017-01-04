const router = require('express').Router();
const courseController = require('../controllers/courseController');

// router.get('/:id', courseController.getCourseById);
router.get('/', courseController.getAll);
router.get('/:id/classes', courseController.getAllClass);
router.post('/', courseController.newCourse);

module.exports = router;
