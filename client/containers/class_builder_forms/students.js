import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const StudentForm = ({ handleSubmit }) => (
  <div>
    <h2>Student Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="student_name">Student Name</label>
        <Field name="Student Name" component="input" type="date" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

StudentForm.propTypes = {
  handleSubmit: React.PropTypes.function,
};

const StudentMakerForm = reduxForm({
  form: 'addStudents',
  onSubmit: makeNewClass,
})(StudentForm);

export default StudentMakerForm;
