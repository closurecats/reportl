import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import { connect } from 'react-redux';
import { getChartData } from '../actions/index';

class RenderGradeChart extends Component {

  componentWillMount() {
    this.props.getChartData();
  }

  render() {
    const config = {
      title: 'Grades',
      series: [{
        name: 'Grade Data',
        data: this.props.gradeData.map(item => ({
          name: item.users.fullName,
          y: item.grade,
        })),
      }],
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
};

function mapStateToProps(state) {
  return { gradeData: state.gradeData };
}

export default connect(mapStateToProps, { getChartData })(RenderGradeChart);
