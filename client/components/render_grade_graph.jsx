import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import drilldown from 'highcharts-drilldown';
import { connect } from 'react-redux';

class RenderGradeChart extends Component {

  componentWillMount() {
    drilldown(Highcharts);
  }

  render() {
    const nameObject = {};

    this.props.gradeData.forEach((item) => {
      if (item.users.fullName === this.props.selectedUserGraph &&
        item.classes.name === this.props.selectedClassGraph &&
        nameObject[item.module.moduleName] === undefined
      ) {
        nameObject[item.module.moduleName] = [];
      }
      if (nameObject[item.module.moduleName]) {
        nameObject[item.module.moduleName].push([item.gradeableobjects.objectName, item.grade]);
      }
    });

    const highLevelData = [];
    const lowLevelData = [];

    Object.keys(nameObject).forEach((item) => {
      lowLevelData.push({
        name: item,
        id: item,
        data: nameObject[item].map(firstItem => firstItem),
      });
      highLevelData.push({
        name: item,
        y: Math.round(nameObject[item].reduce((a, b) => a + b[1], 0) / nameObject[item].length),
        drilldown: item,
      });
    });

    const config = {
      title: 'Grades',
      series: [{
        name: 'Grade Data',
        data: highLevelData,
      }],
      drilldown: {
        series: lowLevelData,
      },
      yAxis: [{
        title: 'Grades',
      }],
      xAxis: {
        type: 'category',
      },
      chart: {
        type: 'column',
      },
      plotOptions: {
        series: {
          borderWidth: 2,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%',
          },
        },
      },
    };

    return (
      <div>
        <h3>
          Module Breakdown for {this.props.selectedUserGraph} in {this.props.selectedClassGraph}
        </h3>
        <p>(Click to Drill Down)</p>
        <ReactHighcharts config={config} />
      </div>
    );
  }
}

RenderGradeChart.propTypes = {
  selectedUserGraph: React.PropTypes.string,
  selectedClassGraph: React.PropTypes.string,
  gradeData: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return {
    gradeData: state.gradeData,
    selectedClassGraph: state.selectedClassGraph,
    selectedUserGraph: state.selectedUserGraph,
  };
}

export default connect(mapStateToProps)(RenderGradeChart);
