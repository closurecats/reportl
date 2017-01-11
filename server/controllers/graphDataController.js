const GraphModel = require('../models/graphModel');

const graphDataController = {

  addGrade(req, res) {
    console.log('GraphModel req.params.id', req.params.meetingId, req.params.userId, req.params.data);
    GraphModel.forge()
      .save()
      .then((gradeableobjectstype) => {
        console.log('New module', JSON.stringify(gradeableobjectstype));
        res.json(gradeableobjectstype);
      })
      .catch((err) => {
        console.log(`gradeableObjectTypeController.newGradeableObject - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getAll(req, res) {
    GraphModel.fetchAll({
      withRelated: ['departments', 'course', 'classes', 'gradeableobjects', 'gradeableobjecttypes', 'users', 'teacher', 'module'],
    })
    .then(gradeableobjectstypes => res.json(gradeableobjectstypes))
    .catch((err) => {
      console.log(`gradeableObjectTypeController.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },

};

module.exports = graphDataController;
