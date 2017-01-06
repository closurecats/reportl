import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllAttendees, markPresent } from '../actions/index';
import MeetingFormMaker from '../containers/setMeeting';

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

const greenCardStyle = {
  display: 'block',
  borderStyle: 'solid',
  backgroundColor: 'green',
  height: '250px',
  width: '220px',
  margin: '10px',
  boxShadow: '10px 10px 5px lightgrey',
  borderWidth: 'thin',
  fontSize: 'x-large',
};

const redCardStyle = {
  display: 'block',
  borderStyle: 'solid',
  backgroundColor: 'red',
  height: '250px',
  width: '220px',
  margin: '10px',
  boxShadow: '10px 10px 5px lightgrey',
  borderWidth: 'thin',
  fontSize: 'x-large',
};

const thumbnailStyle = {
  height: '200px',
  width: '200px',
};

class RenderAttendees extends Component {
  RenderAttendees() {
    console.log('props: attendees: ', this.props.attendees);
    return this.props.attendees.map(eachAttendee => (
      <button
        onClick={() => {
          markPresent(eachAttendee.id);
          setTimeout(() => getAllAttendees({ meeting: eachAttendee.meetingId }), 500);
        }}
        style={eachAttendee.present === 0 ? greenCardStyle : redCardStyle}
      >
        <img
          style={thumbnailStyle}
          alt="Attendee"
          src="http://localhost:8000/api/files/1"
        />
        {/* <img alt="Attendee" src={eachAttendee.user.imgUrl} />   */}
        <div>{eachAttendee.user.fullName}</div>
      </button>
    ));
  }

  render() {
    return (
      <div style={containerStyle}>
        {this.RenderAttendees()}
      </div>
    );
  }
}

RenderAttendees.propTypes = {
  attendees: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllAttendees }, dispatch);
}

function mapStateToProps(state) {
  console.log('state in mapStateToProps: ', state);
  return {
    attendees: state.attendees,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderAttendees);
