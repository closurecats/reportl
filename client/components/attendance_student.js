import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllAttendees } from '../actions/index';

class RenderAttendees extends Component {
  componentWillMount() {
    this.props.getAllAttendees();
  }

  renderTeachers() {
    console.log('props: allAttendees: ', this.props.allAttendees);
    return this.props.allAttendees.map(eachAttendee => (
      <div>
        <img alt="Profile Photo" src={eachAttendee.imgUrl} />
        <li key={eachAttendee.email}>
          <div>Name: {eachAttendee.fullName}</div>
        </li>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <ul>
          {this.renderStudents()}
        </ul>
        <h1>Teachers</h1>
        <ul>
          {this.renderTeachers()}
        </ul>
      </div>
    );
  }
}

RenderAttendees.propTypes = {
  getAllAttendees: React.PropTypes.func,
  allAttendees: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  console.log('state in mapStateToProps: ', state);
  return {
    allAttendees: state.allAttendees,
  };
}

export default connect(mapStateToProps, { getAllAttendees })(RenderAttendees);
