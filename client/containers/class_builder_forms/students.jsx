import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addStudentsToClass } from '../../actions/index';

class StudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student_id: '',
      class_id: this.props.classes.id,
    };

    this.onStudentIdChange = this.onStudentIdChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onStudentIdChange(event) {
    this.setState({ student_id: event });
  }

  onFormSubmit() {
    this.setState({
      student_id: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Add Students to {this.props.classes.name}</h2>
        <p>Student ID</p>
        <input
          value={this.state.student_id}
          type="number"
          onChange={(event) => {
            this.onStudentIdChange(event.target.value);
          }}
        />
        <br />
        <p>Class ID (should be implicit)</p>
        <input
          value={this.state.description}
          type="number"
        />
        <br />
        <button
          type="submit"
          onClick={() => {
            this.props.addStudentsToClass(this.state);
            this.onFormSubmit();
          }}

        >Submit</button>
      </div>
    );
  }
}

StudentForm.propTypes = {
  addStudentsToClass: React.PropTypes.func,
  classes: React.PropTypes.obj,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addStudentsToClass }, dispatch);
}

function mapStateToProps(state) {
  return {
    classes: state.classes,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
