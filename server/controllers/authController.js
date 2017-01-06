const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const secret = 'not a secret' || process.env.SECRET;

const authController = {
  check({ user }, res) {
    res.json({ loggedIn: !!user });
  },
  login({ body: { name, password } }, res) {
    User.forge({ name })
      .fetch()
      .then((user) => {
        if (!user) {
          return Promise.reject('No user with given name found');
        }
        return user.comparePassword(password);
      })
      .then(user => user.refresh({
        withRelated: ['type'],
      }))
      .then(user => jwt.sign(JSON.stringify(user), secret))
      .then(token => res.json({ token }))
      .catch(err => res.status(400).json(err));
  },
  register({ body: userData }, res) {
    User.forge(userData)
      .save()
      .then(user => jwt.sign(JSON.stringify(user), secret))
      .then(token => res.json({ token }))
      .catch(err => res.status(400).json(err));
  },
};

const authMiddleware = {
  userInject(req, res, next) {
    const token = req.headers['x-auth-token'];

    new Promise((resolve, reject) => {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          reject(err);
        }
        resolve(decoded);
      });
    })
    .then(user => user.refresh({
      withRelated: ['type'],
    }))
    .then((user) => {
      req.user = user;
    })
    .catch(() => {
      req.user = false;
    })
    .then(() => next());
  },
};

module.exports = { authController, authMiddleware };
