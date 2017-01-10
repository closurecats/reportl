import React from 'react';
import { connect } from 'react-redux';
import { addGrade } from '../actions/index';

const RenderAttendee = ({ attendee }) => (
  <ol>
    {this.props.attendees.map(eachAttendee => (
      <li>
        {eachAttendee.user.fullName}
        <input type="text" />
        <button
          type="submit"
          onClick={() => { console.log('attendee'); }}
        >Add Grade</button>
      </li>
    ))}
  </ol>
);


RenderAttendee.propTypes = {
  attendee: React.PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addGrade }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(RenderAttendee);
