const router = require('express').Router();
const courseController = require('../controllers/courseController');

router.get('/', courseController.getAll);
router.get('/:id', courseController.getCourseById);
router.put('/:id', courseController.updateCourseById);
router.delete('/:id', courseController.deleteCourseById);
router.get('/:id/classes', courseController.getAllClass);
router.post('/', courseController.newCourse);

module.exports = router;
