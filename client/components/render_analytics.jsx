import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getChartData } from '../actions/index';
import { RenderUserTable } from '../containers/render_user_table';

class RenderAnalytics extends Component {

  componentWillMount() {
    if (!this.props.gradeData) {
      this.props.getChartData();
    }
  }

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => { this.props.getChartData(); }}
          >
            <Link to="/usergradegraph">Student Analytics</Link></button>
          <button
            onClick={() => { this.props.getChartData(); }}
          >
            <Link to="/classgradegraph">Class Analytics</Link></button>
        </div>
        <RenderUserTable />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getChartData }, dispatch);
}

function mapStateToProps(state) {
  return {
    gradeData: state.gradeData,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderAnalytics);
