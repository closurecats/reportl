const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const secret = 'not a secret' || process.env.SECRET;
const tokenName = 'x-auth-token';

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
      .then(token => res.set(tokenName, token).json({ status: 'success' }))
      .catch(() => res.set(tokenName, false).status(401).json({ status: 'error' }));
  },
  register({ body: userData }, res) {
    User.forge(userData)
      .save()
      .then(user => jwt.sign(JSON.stringify(user), secret))
      .then(token => res.set(tokenName, token).json({ status: 'success' }))
      .catch(err => res.status(400).json(err));
  },
};

const authMiddleware = {
  userInject(req, res, next) {
    const token = req.headers[tokenName];

    new Promise((resolve, reject) => {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          reject(err);
        }
        resolve(decoded);
      });
    })
    .then(user => User.forge({ id: user.id }).fetch({ withRelated: ['type'] }))
    .then((user) => {
      if (!user) {
        return Promise.reject();
      }
      req.user = user;
      return jwt.sign(JSON.stringify(user), secret);
    })
    .then(newToken => res.set(tokenName, newToken))
    .catch(() => {
      req.user = false;
      return true;
    })
    .then(() => next());
  },
};

module.exports = { authController, authMiddleware };
