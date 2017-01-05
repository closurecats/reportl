const GradeableObjectModel = require('../models/gradeableObjectModel');

const gradeableObjectController = {

  newGradeableObject({ body: gradeableobjectData }, res) {
    GradeableObjectModel.forge(gradeableobjectData)
      .save()
      .then((gradeableobject) => {
        res.json(gradeableobject);
      })
      .catch((err) => {
        console.log(`gradeableObjecController.newGradeableObject - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getAll(req, res) {
    GradeableObjectModel.fetchAll({
      withRelated: ['module', 'type', 'meeting'],
    })
    .then(gradeableobjects => res.json(gradeableobjects))
    .catch((err) => {
      console.log(`gradeableObjecController.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },
  changeGradeableObject(req, res) {
    GradeableObjectModel.forge({ id: req.params.id }, res)
    .fetch()
    .then(updatedModule => updatedModule.save({
      objectName: req.body.objectName,
      duration: req.body.duration,
      recurs: req.body.recurs,
      recurTotal: req.body.recurTotal,
      percentOfModuleGrade: req.body.percentOfModuleGrade,
      moduleId: req.body.moduleId,
      typeId: req.body.typeId,
    }))
    .then((updatedModuleInfo) => {
      console.log('New module', JSON.stringify(updatedModuleInfo));
      return res.json(updatedModuleInfo);
    })
    .catch((err) => {
      console.log(`moduleController.changeModule - Error: ${err}`);
      res.sendStatus(500);
    })
    .catch((err) => {
      console.log(`moduleController.changeModule - Error: ${err}`);
      res.sendStatus(500);
    });
  },

};

module.exports = gradeableObjectController;
