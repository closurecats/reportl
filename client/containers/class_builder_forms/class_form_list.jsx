import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectForm } from '../../actions/index';
import ClassMaker from './class-maker';
import StudentForm from './students';
import ScheduleForm from './scheduling';
import ModuleForm from './modules';
import AssetForm from './assets';
import AnnouncementsForm from './announcements';
import AssignmentsForm from './assignments';
import EventsForm from './events';
import ExamsForm from './exams';
import RenderClassForm from './render_class_form';

const AppComponents = [['Basic Class', <ClassMaker />], ['Schedule Form', <ScheduleForm />], ['Add Students', <StudentForm />], ['Module Form', <ModuleForm />], ['Asset Form', <AssetForm />], ['Exams Form', <ExamsForm />], ['Assignments Form', <AssignmentsForm />], ['Announcements Form', <AnnouncementsForm />], ['Events Form', <EventsForm />], ['See Class Details', <RenderClassForm />]];

class FormList extends Component {

  renderList() {
    // TODO: Get a unique key
    return AppComponents.map((component, index) => (
      <li key={index}>
        <button onClick={() => { this.props.selectForm(component[1]); }}>
          {component[0]}
        </button>
      </li>
    ));
  }


  render() {
    return (
      <div>
        <h2>Class Builder</h2>
        <ol>
          {this.renderList()}
        </ol>
      </div>
    );
  }
}

FormList.propTypes = {
  // TODO: Looks like this should be an array, not sure what the elements are though
  selectForm: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectForm }, dispatch);
}

function mapStateToProps(state) {
  return { selectedForm: state.selectedForm };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormList);
