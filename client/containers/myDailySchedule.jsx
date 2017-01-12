import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { searchCalendar, getMeetingById, getAllAttendees, getChartData } from '../actions/index';

const calendarStyle = {
  display: 'block',
  borderStyle: 'solid',
  backgroundColor: 'white',
  height: '400px',
  width: '500px',
  margin: '10px',
  borderWidth: 'thick',
  fontSize: 'x-large',
  padding: '5px',
};

const meetingStyle = {
  borderStyle: 'none',
  backgroundColor: 'grey',
  height: '100px',
  width: '500px',
  margin: '25px 0 0 0',
  fontSize: '25px',
};

class renderDailySchedule extends Component {
  componentWillMount() {
    this.props.searchCalendar({
      from_day_of_month: 17,
      from_month: 'February',
      to_day_of_month: 17,
      to_month: 'February',
    });
  }

  renderScheduleInformation() {
    return (
      <div>{this.props.calendarSearchResult.map(day => (
        <div>
          <div>Classes for {day.weekDay} {day.dayOfMonth}, {day.month}</div>
          <div>{day.meetings.map(meetings => (
            <div>
              <Link to="/lesson">
                <button
                  onClick={() => {
                    this.props.getMeetingById(meetings.id);
                    this.props.getAllAttendees(meetings.id);
                  }}
                  style={meetingStyle}
                >
                  <div>{meetings.class.name}</div>
                  <div>{meetings.startTime}</div>
                  <div>{meetings.endTime}</div>
                </button>
              </Link>
            </div>
            ))}</div>
        </div>
      ))}</div>
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
  getChartData: React.PropTypes.func,
  calendarSearchResult: React.PropTypes.arrayOf(React.PropTypes.object),
  children: React.PropTypes.arrayOf(React.PropTypes.object),
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
  return { calendarSearchResult: state.calendarSearchResult };
}

export default connect(mapStateToProps, mapDispatchToProps)(renderDailySchedule);
