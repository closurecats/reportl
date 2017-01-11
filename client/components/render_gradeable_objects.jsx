import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllAttendees } from '../actions/index';
import ObjectForm from '../containers/gradeableobject_form';

class RenderGradeables extends Component {

  renderGradeables() {
    console.log('props: gradeables: ', this.props.gradeables);
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
      <div>
        <h3>Assignments/Exams</h3>
        {this.renderGradeables()}
        <ol>
          {this.props.attendees.map(attendee => (
            <ObjectForm attendee={attendee} />
          ))}
        </ol>
      </div>
    );
  }
}

RenderGradeables.propTypes = {
  attendees: React.PropTypes.arrayOf(React.PropTypes.object),
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
