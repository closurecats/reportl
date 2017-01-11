import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addGrade } from '../actions/index';

class RenderAttendee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  onInputChange(target) {
    this.setState({ inputValue: target });
  }

  render() {
    return (
      <li>
        {this.props.attendee.user.fullName}
        <input
          value={this.state.inputValue}
          type="number"
          onChange={event => this.onInputChange(event.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            this.props.addGrade(
            this.props.attendee.meetingId,
            this.props.attendee.studentId,
            this.state.inputValue);
          }}
        >Add Grade</button>
      </li>
    );
  }
}


RenderAttendee.propTypes = {
  attendee: React.PropTypes.string,
  addGrade: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addGrade }, dispatch);
}

export default connect(null, mapDispatchToProps)(RenderAttendee);
