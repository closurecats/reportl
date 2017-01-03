import { combineReducers, applyMiddleware, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import LoginReducer from './login_reducer';
import UserForm from './addUser_reducer';
import ClassMaker from './class_reducer';
import GetClasses from './get_classes_reducer';
import GetUsers from './get_users_reducer';
import UpdateProfile from './profile_reducer';
import GetProfile from './view_profile';
import GetForms from './classforms_reducer';
import GetClassId from './add_classid_reducer';
import UpdateClassInfo from './update_class_reducer';
import GetStudents from './get_students_reducer';
import GetTeachers from './get_teachers_reducer';

const rootReducer = combineReducers({
  login: LoginField,
  form: formReducer,
  addUser: UserForm,
  classes: ClassMaker,
  allClasses: GetClasses,
  allUsers: GetUsers,
  allStudents: GetStudents,
  allTeachers: GetTeachers,
  updateProfile: UpdateProfile,
  profile: GetProfile,
  selectedForm: GetForms,
  classId: GetClassId,
  classInfo: UpdateClassInfo,
});

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(promise, logger));

export { rootReducer, store };
