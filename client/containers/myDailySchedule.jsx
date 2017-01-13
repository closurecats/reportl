import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { searchCalendar, getMeetingById, getAllAttendees, getChartData } from '../actions/index';

const calendarStyle = {
  borderStyle: 'none',
  display: 'block',
  backgroundColor: 'white',
  height: '400px',
  width: '500px',
  margin: '10px',
  fontSize: 'x-large',
  padding: '2px',
};

const meetingStyle = {
  borderStyle: 'none',
  backgroundColor: '#64e3ba',
  height: '100px',
  width: '500px',
  margin: '25px 0 0 0',
  fontSize: '25px',
};

// const UserType = ({ user }) => {
// };

class renderDailySchedule extends Component {
  componentWillMount() {
    this.props.searchCalendar({
      from_day_of_month: 17,
      from_month: 'February',
      to_day_of_month: 17,
      to_month: 'February',
    });
  }

  isAuth() {
    return !!this.props.user.id;
  }

  isAuthType(...types) {
    return this.isAuth() && !!this.props.user.type && types.includes(this.props.user.type.name);
  }

  renderScheduleInformation() {
    return (
      <div>
        {this.props.calendarSearchResult.map(day => this.renderDayMeetings(day))}
      </div>
    );
  }

  renderDayMeetings(day) {
    return (
      <div>
        <div className="calWeekDay">
          Class for {`${day.weekDay} ${day.dayOfMonth}, ${day.month}`}
        </div>
        <div>
          {day.meetings.map(meeting => this.renderMeeting(meeting))}
        </div>
      </div>
    );
  }

  renderMeeting(meeting) {
    if (this.isAuthType('teacher')) {
      return (
        <Link to="/lesson">
          <button
            onClick={() => {
              this.props.getMeetingById(meeting.id);
              this.props.getAllAttendees(meeting.id);
            }}
            style={meetingStyle}
          >
            <div>{meeting.class.name}</div>
            <div>{meeting.startTime}</div>
            <div>{meeting.endTime}</div>
          </button>
        </Link>
      );
    }

    return (
      <Link to="/lesson/student">
        <button
          onClick={() => {
            this.props.getMeetingById(meeting.id);
          }}
          style={meetingStyle}
        >
          <div>{meeting.class.name}</div>
          <div>{meeting.startTime}</div>
          <div>{meeting.endTime}</div>
        </button>
      </Link>
    );
  }

  render() {
    return (
      <div>
        <div className="dailySchedule">
          <h3>Daily Schedule</h3>
          <div style={calendarStyle}>
            {this.renderScheduleInformation()}
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }

}

renderDailySchedule.propTypes = {
  searchCalendar: React.PropTypes.func,
  getMeetingById: React.PropTypes.func,
  getAllAttendees: React.PropTypes.func,
  calendarSearchResult: React.PropTypes.arrayOf(React.PropTypes.object),
  children: React.PropTypes.arrayOf(React.PropTypes.object),
  user: React.PropTypes.shape({
    address: React.PropTypes.string,
    createdAt: React.PropTypes.string,
    dateOfBirth: React.PropTypes.string,
    description: React.PropTypes.string,
    email: React.PropTypes.string,
    firstName: React.PropTypes.string,
    fullName: React.PropTypes.string,
    id: React.PropTypes.number,
    imgUrl: React.PropTypes.string,
    isDisabled: React.PropTypes.number,
    lastName: React.PropTypes.string,
    name: React.PropTypes.string,
    phoneNumber: React.PropTypes.string,
    token: React.PropTypes.string,
    type: React.PropTypes.shape({
      createdAt: React.PropTypes.string,
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      updatedAt: React.PropTypes.string,
    }),
    typeId: React.PropTypes.number,
    updatedAt: React.PropTypes.string,
  }),
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    searchCalendar,
    getMeetingById,
    getAllAttendees,
    getChartData,
  }, dispatch);
}

function mapStateToProps(state) {
  return { calendarSearchResult: state.calendarSearchResult, user: state.user };
}

export default connect(mapStateToProps, mapDispatchToProps)(renderDailySchedule);
