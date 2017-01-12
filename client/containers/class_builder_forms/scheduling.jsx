import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateClassById } from '../../actions/index';

class ScheduleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start_time: '',
      end_time: '',
      location: '',
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
    };

    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.toggleMonday = this.toggleMonday.bind(this);
    this.toggleTuesday = this.toggleTuesday.bind(this);
    this.toggleWednesday = this.toggleWednesday.bind(this);
    this.toggleThursday = this.toggleThursday.bind(this);
    this.toggleFriday = this.toggleFriday.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onStartTimeChange(event) {
    this.setState({ start_time: event });
  }

  onEndTimeChange(event) {
    this.setState({ end_time: event });
  }

  onLocationChange(event) {
    this.setState({ location: event });
  }

  onFormSubmit() {
    this.setState({
      start_time: '',
      end_time: '',
      location: '',
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
    });
  }

  toggleMonday() {
    this.setState({ monday: true });
  }

  toggleTuesday() {
    this.setState({ tuesday: true });
  }

  toggleWednesday() {
    this.setState({ wednesday: true });
  }

  toggleThursday() {
    this.setState({ thursday: true });
  }

  toggleFriday() {
    this.setState({ friday: true });
  }

  render() {
    return (
      <div>
        <h2>Schedule Form for {this.props.classes.name}</h2>
        <p>Start Time</p>
        <input
          value={this.state.start_time}
          type="time"
          onChange={(event) => {
            this.onStartTimeChange(event.target.value);
          }}
        />
        <br />
        <p>End Time</p>
        <input
          value={this.state.end_time}
          type="time"
          onChange={(event) => {
            this.onEndTimeChange(event.target.value);
          }}
        />
        <br />
        <p>Location</p>
        <input
          value={this.state.location}
          type="text"
          onChange={(event) => {
            this.onLocationChange(event.target.value);
          }}
        />
        <br />
        <p>Monday</p>
        <input
          type="checkbox"
          onChange={() => {
            this.toggleMonday();
          }}
        />
        <br />
        <p>Tuesday</p>
        <input
          type="checkbox"
          onChange={() => {
            this.toggleTuesday();
          }}
        />
        <br />
        <p>Wednesday</p>
        <input
          type="checkbox"
          onChange={() => {
            this.toggleWednesday();
          }}
        />
        <br />
        <p>Thursday</p>
        <input
          type="checkbox"
          onChange={() => {
            this.toggleThursday();
          }}
        />
        <br />
        <p>Friday</p>
        <input
          type="checkbox"
          onChange={() => {
            this.toggleFriday();
          }}
        />
        <br />
        <button
          type="submit"
          onClick={() => {
            this.props.updateClassById(this.props.classes.id, this.state);
            this.onFormSubmit();
          }}
        >Submit</button>
      </div>
    );
  }
}

ScheduleForm.propTypes = {
  updateClassById: React.PropTypes.func,
  classes: React.PropTypes.obj,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateClassById }, dispatch);
}

function mapStateToProps(state) {
  return {
    classes: state.classes,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleForm);
