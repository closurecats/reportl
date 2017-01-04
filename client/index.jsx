import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { store } from './reducers';

import App from './components/app';
import LoginField from './containers/login-field';
import UserForm from './containers/addUser';
import RenderClassBuilder from './components/render_class_builder';
import RenderUsers from './components/render_users';
import UpdateProfile from './components/render_profile_builder';
import RenderProfile from './components/render_profile';
import RenderClasses from './components/render_classes';
import RenderDepartments from './components/render_departments';
import RenderGradeGraph from './components/render_grade_graph';
import DepartmentForm from './containers/addDepartment';
import RenderClassesforCourse from './components/render_courses';
import CourseForm from './containers/addCourse';
import RenderAttendees from './components/attendance_student';
import RenderCalendar from './components/render_calendar';

const isAuth = () => store.getState().user;

const requireAuth = (nextState, replace) => {
  if (!isAuth) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

ReactDOM.render(

  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LoginField} />
        <Route path="/class" component={RenderClassBuilder} />
        <Route path="/user" component={UserForm} />
        <Route path="/classes" component={RenderClasses} />
        <Route path="/users" component={RenderUsers} />
        <Route path="/updateprofile" component={UpdateProfile} />
        <Route path="/profile" component={RenderProfile} onEnter={requireAuth} />
        <Route path="/department" component={RenderDepartments} />
        <Route path="/gradegraph" component={RenderGradeGraph} />
        <Route path="/createDepartment" component={DepartmentForm} />
        <Route path="/course" component={RenderClassesforCourse} />
        <Route path="/createCourse" component={CourseForm} />
        <Route path="/attendance" component={RenderAttendees} />
        <Route path="/calendar" component={RenderCalendar} />
      </Route>
    </Router>
  </Provider>

  , document.getElementById('container'));
