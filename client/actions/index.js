import axios from 'axios';
import { store } from '../reducers/';

const tokenListener = () => {
  const token = store.getState().user.token;

  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  }
};
store.subscribe(tokenListener);

export function loginSubmit(login) {
  const request = axios.post('/auth/login', login);
  return {
    type: 'LOGIN_SUBMITTED',
    payload: request,
  };
}

export function createUser(user) {
  const request = axios.post('/api/users', user);
  return {
    type: 'CREATE_USER',
    payload: request,
  };
}

export function makeNewClass(classes) {
  const request = axios.post('/createclass', classes);
  return {
    type: 'CLASS_CREATED',
    payload: request,
  };
}

export function getAllClasses() {
  const request = axios.get('/api/classes/');
  return {
    type: 'GET_CLASSES',
    payload: request,
  };
}

export function deleteUser(id) {
  const endpoint = `/api/users/${id}`;
  const request = axios.delete(endpoint);

  return {
    type: 'DELETE_USER',
    payload: request,
  };
}

export function getAllUsers() {
  const request = axios.get('/api/users');

  return {
    type: 'GET_USERS',
    payload: request,
  };
}

export function getAllTeachers() {
  const request = axios.get('/api/usertypes/teacher');

  return {
    type: 'GET_TEACHERS',
    payload: request,
  };
}

export function getAllStudents() {
  const request = axios.get('/api/usertypes/student');

  return {
    type: 'GET_STUDENTS',
    payload: request,
  };
}

export function createProfileInformation(profile) {
  const request = axios.put(`/api/users/${profile.id}`, profile);
  return {
    type: 'UPDATE_PROFILE',
    payload: request,
  };
}

export function getProfileInformation() {
  const request = axios.get('/api/users/8');
  return {
    type: 'GET_PROFILE',
    payload: request,
  };
}

export function selectForm(form) {
  return {
    type: 'SELECT_FORM',
    payload: form,
  };
}

export function addClassId(id) {
  return {
    type: 'ADD_CLASS_ID',
    payload: id,
  };
}

export function updateClass(form) {
  const request = axios.put(`/api/classes/${form.id}`, form);
  return {
    type: 'UPDATE_CLASS_INFO',
    payload: request,
  };
}

export function getDepartmentInformation() {
  const request = axios.get('api/departments');
  return {
    type: 'GET_DEPARTMENTS',
    payload: request,
  };
}

export function uploadFile(files) {
  const data = new FormData();
  Object.keys(files.uploadedFile).forEach(key => data.append(key, files.uploadedFile[key]));
  const request = axios.post('/api/files', data);
  return {
    type: 'UPLOAD_FILE',
    payload: request,
  };
}

export function getChartData() {
  const request = axios.get('/api/graphdata/');
  return {
    type: 'GET_GRAPH_DATA',
    payload: request,
  };
}

export function getAllAttendees(meetingId) {
  const request = axios.get(`/api/attendance/meeting/${meetingId}`);
  return {
    type: 'GET_ATTENDEES',
    payload: request,
  };
}

export function markPresent(attendanceId) {
  const request = axios.put(`/api/${attendanceId}`); // placeholder
  return {
    type: 'MARK_PRESENT',
    payload: request,
  };
}

export function createDepartment(department) {
  const request = axios.post('api/departments', department);
  return {
    type: 'CREATE_DEPARTMENT',
    payload: request,
  };
}

export function getCourseDetails() {
  const request = axios.get('api/courses/3');
  return {
    type: 'GET_CLASSES_FOR_COURSE',
    payload: request,
  };
}

export function createCourse(course) {
  const request = axios.post('api/courses', course);
  return {
    type: 'CREATE_COURSE',
    payload: request,
  };
}

export function getAllCalendarEvents() {
  const request = axios.get('api/calendar');
  return {
    type: 'GET_CALENDAR',
    payload: request,
  };
}
