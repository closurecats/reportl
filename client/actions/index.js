import axios from 'axios';

export function loginSubmit(login) {
  const request = axios.post('/login', login);
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
  const request = axios.get('/api/users/');
  return {
    type: 'GET_CLASSES',
    payload: request,
  };
}

export function getAllUsers() {
  const request = axios.get('/api/users/1'); // endpoint not built yet. modify when complete.
  return {
    type: 'GET_USERS',
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
  const request = axios.get('/api/users/1');
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
