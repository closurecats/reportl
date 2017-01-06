import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import drilldown from 'highcharts-drilldown';
import { connect } from 'react-redux';
import { getChartData } from '../actions/index';

class RenderGradeChart extends Component {

  componentWillMount() {
    this.props.getChartData();
    drilldown(Highcharts);
  }

  render() {
    const nameObject = {};

    this.props.gradeData.forEach((item) => {
      if (nameObject[item.users.fullName] === undefined) {
        nameObject[item.users.fullName] = [];
      }
      nameObject[item.users.fullName].push([item.gradeableobjects.objectName, item.grade]);
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
      <ReactHighcharts config={config} />
    );
  }
}

RenderGradeChart.propTypes = {
  getChartData: React.PropTypes.func,
  gradeData: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return { gradeData: state.gradeData };
}

export default connect(mapStateToProps, { getChartData })(RenderGradeChart);
