const TeachersClasses = require('../models/teachersClassesModel');
require('../models/classModel');

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

  getClassByTeacherId({ params: { teacher_id } }, res) {
    TeachersClasses.forge({ teacher_id })
      .fetch({
        withRelated: ['class'],
      })
      .then(userClasses => res.json(userClasses))
      .catch((err) => {
        console.log(`userController.getClassByTeacherId - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getTeacherByClassId({ params: { class_id } }, res) {
    TeachersClasses.forge({ class_id })
      .fetch({
        withRelated: ['class'],
      })
      .then((teacherClass) => {
        console.log(JSON.stringify(teacherClass));
        res.json(teacherClass);
      })
      .catch((err) => {
        console.log(`teachersClassesController.getTeacherByClassId - Error: ${err}`);
        res.sendStatus(500);
      });
  },
};

module.exports = teachersClassesController;
