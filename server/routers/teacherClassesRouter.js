const router = require('express').Router();
const teachersClassesController = require('../controllers/teachersClassesController');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('moduleRouter');
    next();
  });
}

router.post('/', teachersClassesController.addTeacherToClass);

module.exports = router;
