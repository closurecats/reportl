import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const PreRequisitesForm = ({ handleSubmit }) => (
  <div>
    <h2>PreRequisites Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="class_name">Class Name</label>
        <Field name="Class Name" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

PreRequisitesForm.propTypes = {
  handleSubmit: React.PropTypes.function,
};

const PreRequisitesMakerForm = reduxForm({
  form: 'addClassModule',
  onSubmit: makeNewClass,
})(PreRequisitesForm);

export default PreRequisitesMakerForm;
