import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Reactable from 'reactable';
import { getChartData } from '../actions/index';

const Table = Reactable.Table;

class RenderAnalytics extends Component {
  componentWillMount() {
    this.props.getChartData();
  }

  render() {
    const tableData = [];

    this.props.gradeData.forEach((tableItem) => {
      tableData.push({
        Name: tableItem.users.fullName,
        Grade: tableItem.grade,
        Module: tableItem.module.name,
        Assignment: tableItem.gradeableobjects.objectName,
        Class: tableItem.classes.name,
        Department: tableItem.departments.name,

      });
    });
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

        <Table
          className="table"
          data={tableData}
          itemsPerPage={50}
          pageButtonLimit={10}
          sortable={[{ column: 'Grade',
            sort: function sortFunction(a, b) {
              return a > b ? 1 : -1;
            } }]}

        />
      </div>
    );
  }
}

RenderAnalytics.propTypes = {
  getChartData: React.PropTypes.func,
  gradeData: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getChartData }, dispatch);
}

function mapStateToProps(state) {
  return {
    gradeData: state.gradeData,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderAnalytics);
