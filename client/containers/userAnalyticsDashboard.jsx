import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RenderGradeChart from '../components/render_grade_graph';
import RenderPieChart from '../components/render_pie_chart';
import RenderScatterPlotChart from '../components/render_regression_analysis_graph';
import { getChartData, setSelectedUser, setSelectedClass } from '../actions/index';

const classes = ['American Literature', 'Pre-Algebra', 'Biology 1', 'Biology 2', 'Spanish'];
const users = ['John Smith', 'Alice Adams', 'Alvin Ardsley', 'Jennifer Vasquez', 'Erin McClellan', 'Lindsay Herzog', 'Samuel Growan'];

class userAnalyticsDashboard extends Component {

  componentWillMount() {
    this.props.getChartData();
    this.props.setSelectedUser('John Smith');
    this.props.setSelectedClass('American Literature');
  }

  render() {
    return (
      <div>
        <h2>Grades for {this.props.selectedUserGraph} in {this.props.selectedClassGraph}</h2>
        <p>Select User</p>
        <div className="graphButtonsContainer graphUserButtonsContainer">
          {users.map(user => (
            <button
              className="graphClassButtons graphUserButtons"
              onClick={() => { this.props.setSelectedUser(user); }}
            >
              {user}
            </button>))}
        </div>
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
          <RenderPieChart />
          <RenderScatterPlotChart />
          <RenderGradeChart />
        </div>
      </div>
    );
  }
}

userAnalyticsDashboard.propTypes = {
  selectedUserGraph: React.PropTypes.string,
  selectedClassGraph: React.PropTypes.string,
  getChartData: React.PropTypes.func,
  setSelectedUser: React.PropTypes.func,
  setSelectedClass: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedUser, setSelectedClass, getChartData }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedClassGraph: state.selectedClassGraph,
    selectedUserGraph: state.selectedUserGraph,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(userAnalyticsDashboard);
