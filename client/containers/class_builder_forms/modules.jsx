import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeNewModule } from '../../actions/index';

class ModuleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      module_name: '',
      description: '',
      percent_of_class_grade: '',
      class_id: this.props.classes.id,
    };

    this.onModuleNameChange = this.onModuleNameChange.bind(this);
    this.onDescriptionInputChange = this.onDescriptionInputChange.bind(this);
    this.onPercentOfClassGradeChange = this.onPercentOfClassGradeChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onModuleNameChange(event) {
    this.setState({ module_name: event });
  }

  onDescriptionInputChange(event) {
    this.setState({ description: event });
  }

  onPercentOfClassGradeChange(event) {
    this.setState({ percent_of_class_grade: event });
  }

  onFormSubmit() {
    this.setState({
      module_name: '',
      description: '',
      percent_of_class_grade: '',
      class_id: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Add Modules to {this.props.classes.name}</h2>
        <p>Module Name</p>
        <input
          value={this.state.module_name}
          type="text"
          onChange={(event) => {
            this.onModuleNameChange(event.target.value);
          }}
        />
        <br />
        <p>Module Description</p>
        <input
          value={this.state.description}
          type="text"
          onChange={(event) => {
            this.onDescriptionInputChange(event.target.value);
          }}
        />
        <br />
        <p>Percent of Class Grade</p>
        <input
          value={this.state.percent_of_class_grade}
          type="number"
          onChange={(event) => {
            this.onPercentOfClassGradeChange(event.target.value);
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
            this.props.makeNewModule(this.state);
            this.onFormSubmit();
          }}

        >Submit</button>
      </div>
    );
  }
}

ModuleForm.propTypes = {
  makeNewModule: React.PropTypes.func,
  classes: React.PropTypes.obj,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeNewModule }, dispatch);
}

function mapStateToProps(state) {
  return {
    classes: state.classes,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleForm);
