import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllAttendees } from '../actions/index';

class RenderGradeables extends Component {

  renderGradeables() {
    return this.props.gradeables.map(eachObj => (
      <div>
        <div key={eachObj.objectName}>
          <div>Name: {eachObj.objectName}</div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="assignment">
        <div>Assignments/Exams: {this.renderGradeables()}</div>
      </div>
    );
  }
}

RenderGradeables.propTypes = {
  gradeables: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return {
    gradeables: state.meeting.gradeable_objects || [],
    attendees: state.attendees,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllAttendees }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderGradeables);
