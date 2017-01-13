import React from 'react';
import { connect } from 'react-redux';

const RenderPresentationForStudent = ({ meeting }) => (
  <div>
    <h3>Presentation</h3>
    <iframe
      src={meeting.presentationUrl}
      width="595" height="485" frameBorder="0" marginWidth="0" marginHeight="0"
      scrolling="no" allowFullScreen
    />
  </div>
);


RenderPresentationForStudent.propTypes = {
  meeting: React.PropTypes.obj,
};


function mapStateToProps(state) {
  return {
    meeting: state.meeting,
  };
}

export default connect(mapStateToProps)(RenderPresentationForStudent);
