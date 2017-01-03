const router = require('express').Router();
const { authController } = require('../controllers/authController');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('authRouter');
    next();
  });
}

router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;
