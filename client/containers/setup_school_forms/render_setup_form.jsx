import React from 'react';
import UserFormMaker from '../addUser';
import DepartmentFormMaker from '../addDepartment';
import CourseFormMaker from '../addCourse';

class RenderSetupForm extends React.Component {
  constructor(props) {
    super(props);
    this.switchView = this.switchView.bind(this);
    this.state = {
      viewNow: 'User',
    };
  }

  switchView(viewName) {
    this.setState({ viewNow: viewName });
  }

  currentView() {
    if (this.state.viewNow === 'User') {
      return <UserFormMaker />;
    }

    if (this.state.viewNow === 'Department') {
      return <DepartmentFormMaker />;
    }

    if (this.state.viewNow === 'Course') {
      return <CourseFormMaker />;
    }

    return false;
  }

  render() {
    return (
      <div>
        <div className="viewSwitch">
          <button className="userViewButton" onClick={() => this.switchView('User')}>Add User</button>
          <button className="userViewButton" onClick={() => this.switchView('Department')}>Add Department</button>
          <button className="userViewButton" onClick={() => this.switchView('Course')}>Add Course</button>
        </div>
        <div className="formContain">
          {this.currentView()}
        </div>
      </div>
    );
  }
}

export default RenderSetupForm;
