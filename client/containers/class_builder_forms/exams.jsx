import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeNewClass } from '../../actions/index';

class ExamsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object_name: '',
      type_id: '',
      percent_of_module_grade: 0,
      class_id: '',
    };

    this.onAssignmentNameChange = this.onAssignmentNameChange.bind(this);
    this.onAssignmentTypeChange = this.onAssignmentTypeChange.bind(this);
    this.onPercentOfModuleGradeChange = this.onPercentOfModuleGradeChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onAssignmentNameChange(event) {
    this.setState({ object_name: event });
  }

  onAssignmentTypeChange(event) {
    this.setState({ type_id: event });
  }

  onPercentOfModuleGradeChange(event) {
    this.setState({ percent_of_module_grade: event });
  }

  onFormSubmit() {
    this.setState({
      object_name: '',
      type_id: '',
      percent_of_module_grade: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Add Modules to {this.props.classes.name}</h2>
        <p>Assignment Name</p>
        <input
          value={this.state.object_name}
          type="text"
          onChange={(event) => {
            this.onAssignmentNameChange(event.target.value);
          }}
        />
        <br />
        <p>Assignment Type (1 - Exam, 2 - Quiz)</p>
        <input
          value={this.state.type_id}
          type="number"
          onChange={(event) => {
            this.onAssignmentTypeChange(event.target.value);
          }}
        />
        <br />
        <p>Percent of Module Grade</p>
        <input
          value={this.state.percent_of_module_grade}
          type="number"
          onChange={(event) => {
            this.onPercentOfModuleGradeChange(event.target.value);
          }}
        />
        <br />
        <p>Class ID (should be implicit)</p>
        <input
          type="text"
        />
        <br />
        <button
          type="submit"
          onClick={() => {
            this.props.makeNewClass(this.state);
            this.onFormSubmit();
          }}

        >Submit</button>
      </div>
    );
  }
}

ExamsForm.propTypes = {
  makeNewClass: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeNewClass }, dispatch);
}

function mapStateToProps(state) {
  return {
    classes: state.classes,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamsForm);
