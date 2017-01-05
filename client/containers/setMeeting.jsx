import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllAttendees, getMeetingById } from '../actions/index';

class MeetingForm extends Component {

  constructor(props) {
    super(props);

    this.state = { meetingId: '' };
  }


  onInputChange(meetingId) {
    this.setState({ meetingId });
  }

  render() {
    return (
      <div>
        <h2>Select a Meeting</h2>
        <div>
          <label htmlFor="meeting">Id:</label>
          <input
            name="meeting"
            type="number"
            value={this.state.meetingId}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
        <button
          onClick={
            () => {
              this.props.getAllAttendees(this.state.meetingId);
              this.props.getMeetingById(this.state.meetingId);
            }
          }
        >Submit</button>
      </div>
    );
  }
}

MeetingForm.propTypes = {
  getAllAttendees: React.PropTypes.func,
  getMeetingById: React.PropTypes.func,
};

function mapStateToProps(state) {
  return { attendees: state.attendees, meeting: state.meeting };
}

export default connect(mapStateToProps, { getAllAttendees, getMeetingById })(MeetingForm);
