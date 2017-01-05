const TeachersClasses = require('../models/teachersClassesModel');

const teachersClassesController = {
  addTeacherToClass({ body: data }, res) {
    console.log('teachersClassesData', data);
    TeachersClasses.forge(data)
      .save()
      .then((teacherIdResponse) => {
        console.log('New Teacher - class pair', JSON.stringify(teacherIdResponse));
        res.json(teacherIdResponse);
      })
      .catch((err) => {
        console.log(`teachersClassesController.addTeacherToClass - Error: ${err}`);
        res.sendStatus(500);
      });
  },
};

module.exports = teachersClassesController;
