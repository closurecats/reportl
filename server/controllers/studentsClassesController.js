const StudentsClasses = require('../models/studentsClassesModel');

const studentsClassesController = {

  addStudentToClass({ body }, res) {
    console.log('studentClassData', body);
    StudentsClasses.forge(body)
      .save()
      .then((studentIdResponse) => {
        console.log('New student - class pair', JSON.stringify(studentIdResponse));
        res.json(studentIdResponse);
      })
      .catch((err) => {
        console.log(`studentsClassesController.addStudentToClass - Error: ${err}`);
        res.sendStatus(500);
      });
  },
};

module.exports = studentsClassesController;
