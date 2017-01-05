import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCalendarEvents } from '../actions/index';
import SearchCalendar from '../containers/getCalendarDays';

class RenderCalendar extends Component {

  componentWillMount() {
    this.props.getAllCalendarEvents();
  }

  renderSearchResults() {
    return this.props.calendarSearchResult.map(eachResultDay => (
      <div>{eachResultDay}</div>
    ));
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
        <SearchCalendar />
        {this.renderCalendar()}
      </div>
    );
  }
}

RenderCalendar.propTypes = {
  getAllCalendarEvents: React.PropTypes.func,
  calendarData: React.PropTypes.arrayOf(React.PropTypes.object),
  calendarSearchResult: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return { calendarData: state.calendarData };
}

export default connect(mapStateToProps, { getAllCalendarEvents })(RenderCalendar);
