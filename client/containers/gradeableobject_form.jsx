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
          onChange={event => this.onInputChange(event.target.value)}
        />
        <button
          type="submit"
          onClick={() => { console.log('attendee'); }}
        >Add Grade</button>
      </li>
    );
  }
}


RenderAttendee.propTypes = {
  attendee: React.PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addGrade }, dispatch);
}


export default connect(null, mapDispatchToProps)(RenderAttendee);
