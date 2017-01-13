import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginSubmit } from '../actions/index';

const LoginField = ({ handleSubmit }) => (
  <div className="form">
    <h2 className="formTitle">Login</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label className="label" htmlFor="username">Username</label>
        <Field className="field" name="name" component="input" type="text" />
      </div>
      <div>
        <label className="label" htmlFor="password">Password</label>
        <Field className="field" name="password" component="input" type="password" />
      </div>
      <button className="formButton" type="submit">Submit</button>
    </form>
  </div>
);

LoginField.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const LoginFieldMaker = reduxForm({
  form: 'login',
})(LoginField);

export default connect(() => ({}), { onSubmit: loginSubmit })(LoginFieldMaker);
