/* eslint no-unused-vars: "warn"*/
import React from 'react';
import { connect } from 'react-redux';
import UserForm from '../addUser';
import DepartmentFormMaker from '../addDepartment';
import CourseForm from '../addCourse';

const SetupFormDetail = ({ selectedForm }) => (
  <div>
    <div>
      { selectedForm[0] }
    </div>
  </div>
);

SetupFormDetail.propTypes = {
  // TODO: Looks like this should be an array, not sure what the elements are though
  selectedForm: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    selectedForm: state.selectedForm,
  };
}

export default connect(mapStateToProps)(SetupFormDetail);
