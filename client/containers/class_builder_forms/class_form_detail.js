import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassMaker from './class-maker';
import StudentForm from './students';
import ScheduleForm from './scheduling';
import ModuleForm from './modules';
import AssetForm from './assets';
import AnnouncementsForm from './announcements';
import AssignmentsForm from './assignments';
import EventsForm from './events';
import ExamsForm from './exams';

class FormDetail extends Component {

  render() {
    return (
      <div>
        { this.props.selectedForm[0] }
      </div>
    );
  }
}

FormDetail.propTypes = {
  selectForm: React.PropTypes.function,
};

function mapStateToProps(state) {
  return {
    selectedForm: state.selectedForm,
    };
}

export default connect(mapStateToProps)(FormDetail);
