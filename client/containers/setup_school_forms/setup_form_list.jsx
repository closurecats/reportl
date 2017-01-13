import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectForm } from '../../actions/index';
import UserForm from '../addUser';
import DepartmentFormMaker from '../addDepartment';
import CourseForm from '../addCourse';

const AppComponents = [['Add Users', <UserForm />], ['Add Departments', <DepartmentFormMaker />], ['Add Courses', <CourseForm />]];

class SetupFormList extends Component {

  renderList() {
    // TODO: Get a unique key
    return AppComponents.map((component, index) => (
      <li key={index}>
        <button onClick={() => { this.props.selectForm(component[1]); }}>
          {component[0]}
        </button>
      </li>
    ));
  }


  render() {
    return (
      <div>
        <h2>Set Up School</h2>
        <ol>
          {this.renderList()}
        </ol>
      </div>
    );
  }
}

SetupFormList.propTypes = {
  // TODO: Looks like this should be an array, not sure what the elements are though
  selectForm: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectForm }, dispatch);
}

function mapStateToProps(state) {
  return { selectedForm: state.selectedForm };
}

export default connect(mapStateToProps, mapDispatchToProps)(SetupFormList);
