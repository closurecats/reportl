const router = require('express').Router();
const meetingsController = require('../controllers/meetingsController');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('meetingsRouter');
    next();
  });
}

router.get('/', meetingsController.getAll);
router.get('/:id', meetingsController.getMeetingById);

module.exports = router;
