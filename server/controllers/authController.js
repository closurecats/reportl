const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const secret = 'not a secret' || process.env.SECRET;

const authController = {
  login({ body: { name, password } }, res) {
    User.forge({ name })
      .fetch()
      .then((user) => {
        if (!user) {
          return Promise.reject('No user with given name found');
        }
        return user.comparePassword(password);
      })
      .then(user => jwt.sign(user, secret))
      .then(token => res.json({ token }))
      .catch(err => res.status(400).json(err));
  },
  register({ body: userData }, res) {
    User.forge({ userData })
      .save()
      .then(user => jwt.sign(user, secret))
      .then(token => res.json({ token }))
      .catch(err => res.status(400).json(err));
  },
};

module.exports = authController;
