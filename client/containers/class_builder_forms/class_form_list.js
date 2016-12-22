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

const AppComponents = [['Basic Class', <ClassMaker />], ['Schedule Form', <ScheduleForm />],['Add Students', <StudentForm />], ['Module Form', <ModuleForm />], ['Asset Form', <AssetForm />], ['Exams Form', <ExamsForm />], ['Assignments Form', <AssignmentsForm />], ['Announcements Form', <AnnouncementsForm />], ['Events Form', <EventsForm />]];

class FormList extends Component {

  renderList() {
    return (
      AppComponents.map(component =>
        <li>
          <button onClick={() => { this.props.selectForm(component[1]); }}>
            {component[0]}
          </button>
        </li>
      )
    );
  }


  render() {
    return (
      <div>
        <h2>This is the Form List</h2>
        <ol>
          {this.renderList()}
        </ol>
      </div>
    );
  }
}

FormList.propTypes = {
  selectForm: React.PropTypes.function,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectForm }, dispatch);
}

function mapStateToProps(state) {
  return { selectedForm: state.selectedForm };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormList);
