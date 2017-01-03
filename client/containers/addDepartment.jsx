import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createDepartment } from '../actions/index';

const createDepartmentForm = ({ handleSubmit }) => (
  <div>
    <h2>Create Department</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="Name" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

createDepartmentForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const DepartmentFormMaker = reduxForm({
  form: 'addDepartment',
  onSubmit: createDepartment,
})(createDepartmentForm);

export default DepartmentFormMaker;
