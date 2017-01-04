import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import LoginField from './containers/login-field';
import ClassMaker from './containers/class_builder_forms/class-maker';
import UserForm from './containers/addUser';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginField} />
    <Route path="/class" component={ClassMaker} />
    <Route path="/user" component={UserForm} />
  </Route>
);

// this file is currently not in use - routes have been integrated into ./index.js -Mattie 12/20
