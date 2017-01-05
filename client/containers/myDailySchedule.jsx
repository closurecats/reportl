import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { calendarSpan, launchLesson } from '../actions/index';

const calendarStyle = {
  display: 'block',
  borderStyle: 'solid',
  backgroundColor: 'white',
  height: '800px',
  width: '500px',
  margin: '10px',
  borderWidth: 'thick',
  fontSize: 'x-large',
};

const meetingStyle = {
  borderStyle: 'solid',
  backgroundColor: 'white',
  height: '100px',
  width: '500px',
};

class renderDailySchedule extends Component {
  componentWillMount() {
    this.props.calendarSpan({
      from_day_of_month: 17,
      from_month: 'February',
      to_day_of_month: 17,
      to_month: 'February',
    });
  }

  renderScheduleInformation() {
    return this.props.calendarSearchResult.map(meetings => (
      <button
        key={meetings.id}
        style={meetingStyle}
        onClick={() => this.props.launchLesson(meetings.id)}
      >
        {meetings.name}
      </button>
    ));
  }
  render() {
    return (
      <div>
        <div>
          <h3>Daily Schedule</h3>
          <div style={calendarStyle}>
            {this.renderScheduleInformation()}
          </div>
        </div>
      </div>
    );
  }

}

renderDailySchedule.propTypes = {
  renderScheduleInformation: React.PropTypes.func,
  launchLesson: React.PropTypes.func,
  calendarSpan: React.PropTypes.func,
  calendarSearchResult: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ calendarSpan, launchLesson }, dispatch);
}

function mapStateToProps(state) {
  return { calendarSearchResult: state.calendarSearchResult };
}

export default connect(mapStateToProps, mapDispatchToProps)(renderDailySchedule);
