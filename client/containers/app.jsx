import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const App = ({ children, user }) => {
  const isAuth = () => !!user.id;
  const isAuthType = (...types) => isAuth() && !!user.type && types.includes(user.type.name);

  return (
    <div>
      <div>
        {!isAuth() && <button><Link to="/">Login</Link></button>}
        {isAuth() && <button><Link to="/class">Class Builder</Link></button>}
        {isAuth() && <button><Link to="/user">Create User</Link></button>}
        {isAuthType('student', 'teacher') && <button><Link to="/classes">View All Classes</Link></button>}
        {isAuth() && <button><Link to="/users">View All Users</Link></button>}
        {isAuthType('student', 'teacher') && <button><Link to="/updateprofile">Create Profile</Link></button>}
        {isAuthType('student', 'teacher') && <button><Link to="/profile">View Profile</Link></button>}
        {isAuthType('student', 'teacher') && <button><Link to="/coursecatalog">View Course Catalog</Link></button>}
        {isAuthType('teacher') && <button><Link to="/gradegraph">View Grades</Link></button>}
        {isAuthType('teacher') && <button><Link to="/createDepartment">Create Department</Link></button>}
        {isAuthType('teacher', 'student') && <button><Link to="/course">View All Classes for a Course</Link></button>}
        {isAuthType('teacher') && <button><Link to="/createCourse">Create Course</Link></button>}
        {isAuthType('teacher') && <button><Link to="/lesson">View Lesson</Link></button>}
        {isAuthType('teacher', 'student') && <button><Link to="/calendar">View Calendar</Link></button>}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

App.propTypes = {
  // TODO: Not sure if this is the correct type for children
  children: React.PropTypes.func,
  user: React.PropTypes.shape({
    address: React.PropTypes.string,
    createdAt: React.PropTypes.string,
    dateOfBirth: React.PropTypes.string,
    description: React.PropTypes.string,
    email: React.PropTypes.string,
    firstName: React.PropTypes.string,
    fullName: React.PropTypes.string,
    id: React.PropTypes.number,
    imgUrl: React.PropTypes.string,
    isDisabled: React.PropTypes.number,
    lastName: React.PropTypes.string,
    name: React.PropTypes.string,
    phoneNumber: React.PropTypes.string,
    token: React.PropTypes.string,
    type: React.PropTypes.shape({
      createdAt: React.PropTypes.string,
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      updatedAt: React.PropTypes.string,
    }),
    typeId: React.PropTypes.number,
    updatedAt: React.PropTypes.string,
  }),
};

export default connect(state => ({
  user: state.user,
}))(App);
