const User = require('../models/userModel');

const userController = {
  getAll(req, res) {
    User.fetchAll()
      .then(users => res.json(users))
      .catch((err) => {
        console.log(`userController.getAll - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getUserById({ params: { id }, baseUrl, originalUrl }, res) {
    User.forge({ id })
      .fetch()
      .then((user) => {
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({
            error: {
              message: 'Not Found',
            },
            request: {
              endpoint: baseUrl,
              url: originalUrl,
              parameters: {
                id,
              },
            },
          });
        }
      })
      .catch((err) => {
        console.log(`userController.getUserById - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  newUser({ body: userData, baseUrl, originalUrl }, res) {
    User.forge(userData)
      .save()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log(`userController.newUser - Error: ${err}`);
        res.status(404).json({
          error: {
            message: 'Cannot create user',
          },
          request: {
            endpoint: baseUrl,
            url: originalUrl,
            content: userData,
          },
        });
      });
  },

  deleteUserById({ params: { id }, baseUrl, originalUrl }, res) {
    User.forge({ id })
      .destroy()
      .then(() => res.status(200).json({
        status: 'success',
      }))
      .catch((err) => {
        console.log(`userController.deleteUserById - Error: ${err}`);
        res.status(404).json({
          error: {
            message: 'Cannot delete user',
          },
          request: {
            endpoint: baseUrl,
            url: originalUrl,
            parameters: {
              id,
            },
          },
        });
      });
  },

  updateUserById({ params: { id }, body: userData, baseUrl, originalUrl }, res) {
    User.forge({ id })
      .fetch()
      .then((user) => {
        Object.keys(userData).forEach((key) => {
          user.set(key, userData[key]);
        });
        res.json(user);
      })
      .catch((err) => {
        console.log(`userController.deleteUserById - Error: ${err}`);
        res.status(404).json({
          error: {
            message: 'Cannot delete user',
          },
          request: {
            endpoint: baseUrl,
            url: originalUrl,
            parameters: {
              id,
            },
            content: userData,
          },
        });
      });
  },
};

module.exports = userController;
