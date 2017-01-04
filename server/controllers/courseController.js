const Course = require('../models/courseModel');

const courseController = {
  getAll(req, res) {
    Course.fetchAll()
      .then(course => res.json(course))
      .catch((err) => {
        console.log(`courseController.getAll - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getCourseById({ params: { id } }, res) {
    Course.forge({ id })
      .fetch()
      .then((course) => {
        console.log(JSON.stringify(course));
        res.json(course);
      })
      .catch((err) => {
        console.log(`courseController.getCourseById - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getAllClass({ params: { id } }, res) {
    Course.forge({ id })
      .fetch({
        withRelated: ['classes'],
      })
      .then((clas) => {
        console.log(JSON.stringify(clas));
        res.json(clas);
      })
      .catch((err) => {
        console.log(`courseController.getAllClass - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  newCourse({ body: courseData }, res) {
    Course.forge(courseData)
      .save()
      .then((course) => {
        res.json(course);
      })
      .catch((err) => {
        console.log(`courseController.newCourse - Error: ${err}`);
        res.sendStatus(500);
      });
  },
};

module.exports = courseController;
