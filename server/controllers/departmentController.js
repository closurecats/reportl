const Department = require('../models/departmentModel');
const UserType = require('../models/userTypeModel');

const departmentController = {
  getUsers({ params: { name }, baseUrl, originalUrl }, res) {
    Department.forge({ name })
    .fetch({
      withRelated: [
        'users',
      ],
    })
    .then(department => res.json(department))
    .catch((err) => {
      console.log(`departmentController.getUsers - Error: ${err}`);
      res.status(404).json({
        error: {
          message: 'Cannot find department',
        },
        request: {
          endpoint: baseUrl,
          url: originalUrl,
          parameters: {
            name,
          },
        },
      });
    });
  },

  getUsersByType({ params: { type, name }, baseUrl, originalUrl }, res, next) {
    if (!isNaN(name)) {
      next();
    } else {
      UserType.forge({
        name: type,
      }).fetch()
      .then((userType) => {
        if (!userType) {
          return Promise.reject('invalid user type');
        }
        return Department.forge({ name })
          .fetch({
            withRelated: [
              {
                users(qb) {
                  return qb.where('users.type_id', userType.get('id'));
                },
              },
            ],
          });
      })
      .then(department => res.json(department))
      .catch((err) => {
        console.log(`departmentController.getUsersByType - Error: ${err}`);
        res.status(404).json({
          error: {
            message: typeof err === 'string' ? err : null,
          },
          request: {
            endpoint: baseUrl,
            url: originalUrl,
            parameters: {
              type,
              name,
            },
          },
        });
      });
    }
  },

  getAll(req, res) {
    Department.fetchAll()
    .then(departments => res.json(departments))
    .catch((err) => {
      console.log(`departmentController.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },

  getDepartmentById({ params: { id }, baseUrl, originalUrl }, res) {
    Department.forge({ id })
      .fetch()
      .then((department) => {
        if (department) {
          res.json(department);
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
        console.log(`departmentController.getDepartmentById - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  newDepartment({ body: departmentData, baseUrl, originalUrl }, res) {
    Department.forge(departmentData)
      .save()
      .then((department) => {
        res.json(department);
      })
      .catch((err) => {
        console.log(`departmentController.newDepartment - Error: ${err}`);
        res.status(404).json({
          error: {
            message: 'Cannot create department',
          },
          request: {
            endpoint: baseUrl,
            url: originalUrl,
            content: departmentData,
          },
        });
      });
  },

  updateDepartmentById({ params: { id }, body: departmentData }, res) {
    Department.forge({ id })
      .fetch()
      .then((department) => {
        Object.keys(departmentData).forEach(key => department.set(key, departmentData[key]));
        return department.save();
      })
      .then(department => res.json(department))
      .catch((err) => {
        console.log(`departmentController.updateDepartmentById - Error: ${err}`);
      });
  },
};

module.exports = departmentController;
