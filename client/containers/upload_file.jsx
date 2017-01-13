import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { uploadProfilePhoto } from '../actions/index';

const UploadFile = ({ handleSubmit }) => (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <div>
        <Field className="field" name="uploadedFile" component="input" type="file" />
      </div>
      <button className="formButton" type="submit">Submit</button>
    </form>
  </div>
);

UploadFile.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const UploadFileMaker = reduxForm({
  form: 'profile',
  onSubmit: uploadProfilePhoto,
})(UploadFile);

export default UploadFileMaker;
