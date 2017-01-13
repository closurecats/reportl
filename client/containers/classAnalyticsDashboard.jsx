import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RenderGradeChartByUser from '../components/render_grade_graph_by_user';
import RenderAreaChart from '../components/render_area_chart';
import { getChartData, setSelectedClass } from '../actions/index';

const classes = ['American Literature', 'Pre-Algebra', 'Biology 1', 'Biology 2', 'Spanish'];

class classAnalyticsDashboard extends Component {

  componentWillMount() {
    this.props.getChartData();
    this.props.setSelectedClass('American Literature');
  }

  render() {
    return (
      <div>
        <h2 className="pageTitle">Grades for {this.props.selectedClassGraph}</h2>
        <p>Select Class</p>
        <div className="graphButtonsContainer">
          {classes.map(classItem => (
            <button
              className="graphClassButtons"
              onClick={() => { this.props.setSelectedClass(classItem); }}
            >
              {classItem}
            </button>
          ))}</div>
        <div>
          <RenderAreaChart />
          <RenderGradeChartByUser />
        </div>
      </div>
    );
  }
}

classAnalyticsDashboard.propTypes = {
  selectedClassGraph: React.PropTypes.string,
  getChartData: React.PropTypes.func,
  setSelectedClass: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedClass, getChartData }, dispatch);
}

function mapStateToProps(state) {
  return {
    gradeData: state.gradeData,
    selectedClassGraph: state.selectedClassGraph,
    selectedUserGraph: state.selectedUserGraph,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(classAnalyticsDashboard);
