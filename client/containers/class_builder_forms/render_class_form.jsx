import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClassById } from '../../actions/index';

class RenderClassForm extends Component {

  componentWillMount() {
    this.props.getClassById(this.props.classes.id);
  }

  renderClasses() {
    return (
      <div>
        <div>Class Name: {this.props.selectedClass.name}</div>
        <div>Class Teacher: {this.props.selectedClass.teacher_id}</div>
        <div>Schedule:
          <ul>
            <li> {this.props.selectedClass.monday === 1 ?
              <p>{this.props.selectedClass.startTime} to {this.props.selectedClass.endTime}</p> :
              <p>No Classes</p>}</li>
            <li> {this.props.selectedClass.tuesday === 1 ?
              <p>{this.props.selectedClass.start_time} to {this.props.selectedClass.end_time}</p> :
              <p>No Classes</p>}</li>
            <li> {this.props.selectedClass.wednesday === 1 ?
              <p>{this.props.selectedClass.start_time} to {this.props.selectedClass.end_time}</p> :
              <p>No Classes</p>}</li>
            <li> {this.props.selectedClass.thursday === 1 ?
              <p>{this.props.selectedClass.start_time} to {this.props.selectedClass.end_time}</p> :
              <p>No Classes</p>}</li>
            <li> {this.props.selectedClass.friday === 1 ?
              <p>{this.props.selectedClass.start_time} to {this.props.selectedClass.end_time}</p> :
              <p>No Classes</p>}</li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>All Classes</h2>
        <ol>
          {this.renderClasses()}
        </ol>
      </div>
    );
  }
}

RenderClassForm.propTypes = {
  getClassById: React.PropTypes.func,
  selectedClass: React.PropTypes.obj,
  classes: React.PropTypes.obj,
};

function mapStateToProps(state) {
  return {
    selectedClass: state.selectedClass,
    classes: state.classes,
  };
}

export default connect(mapStateToProps, { getClassById })(RenderClassForm);
