import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCalendarEvents } from '../actions/index';

class RenderCalendar extends Component {

  componentWillMount() {
    this.props.getAllCalendarEvents();
  }

  renderCalendar() {
    return this.props.calendarData.map(eachDay => (
      <ol>{
          eachDay.data.map(eachDayItem => (
            <li key={eachDayItem.id}>
              {eachDayItem.weekDay} {eachDayItem.month} {eachDayItem.dayOfMonth}
              <div>{eachDayItem.meetings.map(meeting => (
                <div>{meeting.classId}, {meeting.startTime}, {meeting.endTime}</div>
              ))}
              </div></li>
          ))}
      </ol>
    ));
  }

  render() {
    return (
      <div>
        <h2>Calendar Events</h2>
        {this.renderCalendar()}
      </div>
    );
  }
}

RenderCalendar.propTypes = {
  getAllCalendarEvents: React.PropTypes.func,
  calendarData: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return { calendarData: state.calendarData };
}

export default connect(mapStateToProps, { getAllCalendarEvents })(RenderCalendar);
