const router = require('express').Router();
const userRouter = require('./userRouter');
const userTypeRouter = require('./userTypeRouter');
const classRouter = require('./classRouter');
const courseRouter = require('./courseRouter');
const departmentRouter = require('./departmentRouter');
const fileRouter = require('./fileRouter');
const moduleRouter = require('./moduleRouter');
const gradeableobjectsRouter = require('./gradeableobjectsRouter');
const gradeableobjectsTypeRouter = require('./gradeableobjectsTypeRouter');
const graphdataRouter = require('./graphdataRouter');
const meetingsRouter = require('./meetingsRouter');
const calendarRouter = require('./calendarRouter');
const attendanceRouter = require('./attendanceRouter');
const studentClassesRouter = require('./studentClassesRouter');
const teacherClassesRouter = require('./teacherClassesRouter');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('apiRouter');
    next();
  });
}

router.use('/users', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> userRouter');
  }
  next();
}, userRouter);

router.use('/usertypes', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> userTypeRouter');
  }
  next();
}, userTypeRouter);

router.use('/departments', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> departmentRouter');
  }
  next();
}, departmentRouter);

router.use('/classes', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> classRouter');
  }
  next();
}, classRouter);

router.use('/courses', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> courseRouter');
  }
  next();
}, courseRouter);


router.use('/files', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> fileRouter');
  }
  next();
}, fileRouter);

router.use('/modules', (req, res, next) => {
  console.log('apiRouter -> moduleRouter');
  next();
}, moduleRouter);

router.use('/gradeableobjects', (req, res, next) => {
  console.log('apiRouter -> gradeableobjectsRouter');
  next();
}, gradeableobjectsRouter);

router.use('/gradeableobjectstypes', (req, res, next) => {
  console.log('apiRouter -> gradeableobjectstypesRouter');
  next();
}, gradeableobjectsTypeRouter);

router.use('/graphdata', (req, res, next) => {
  console.log('apiRouter -> graphdataRouter');
  next();
}, graphdataRouter);

router.use('/meetings', (req, res, next) => {
  console.log('apiRouter -> meetingsRouter');
  next();
}, meetingsRouter);

router.use('/calendar', (req, res, next) => {
  console.log('apiRouter -> calendarRouter');
  next();
}, calendarRouter);

router.use('/attendance', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> attendanceRouter');
  }
  next();
}, attendanceRouter);

router.use('/students_classes', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> studentClassesRouter');
  }
  next();
}, studentClassesRouter);

router.use('/teachers_classes', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('apiRouter -> teacherClassesRouter');
  }
  next();
}, teacherClassesRouter);


module.exports = router;
