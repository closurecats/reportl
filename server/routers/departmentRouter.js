const router = require('express').Router();
const departmentController = require('../controllers/departmentController');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('departmentRouter');
    next();
  });
}

router.get('/', departmentController.getAll);
router.get('/:name/users', departmentController.getUsers);
router.get('/:name/:type', departmentController.getUsersByType);
router.get('/:id', departmentController.getDepartmentById);
router.put('/:id', departmentController.updateDepartmentById);
router.post('/', departmentController.newDepartment);

module.exports = router;
