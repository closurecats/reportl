import React from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import { connect } from 'react-redux';

const RenderPieChart = ({ gradeData, selectedUserGraph, selectedClassGraph }) => {
  const temporaryObject = {};
  const filteredArray = [];
  const pieChartData = [];

  gradeData.forEach((item) => {
    if (item.users.fullName === selectedUserGraph &&
        item.classes.name === selectedClassGraph) {
      filteredArray.push(item);
    }
  });

  filteredArray.forEach((item) => {
    if (!temporaryObject[item.module.moduleName]) {
      temporaryObject[item.module.moduleName] = {
        gradeableobjects: [item.grade],
      };
    } else {
      temporaryObject[item.module.moduleName].gradeableobjects.push(item.grade);
    }
  });

  Object.keys(temporaryObject).forEach((module) => {
    pieChartData.push({
      name: module,
      y: Math.round(temporaryObject[module].gradeableobjects.reduce((a, b) =>
        a + b
      , 0) / temporaryObject[module].gradeableobjects.length),
    });
  });

  const config = {
    title: 'Grades by Module',
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    tooltip: {
      pointFormat: 'Average Grade: {point.y}',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
          },
        },
      },
    },
    series: [{
      name: 'Grades by User By Module',
      colorByPoint: true,
      data: pieChartData,
    }],
  };

  return (
    <div>
      <h3>Average Module Grades for {selectedUserGraph} in {selectedClassGraph}</h3>
      <ReactHighcharts config={config} />
    </div>
  );
};

RenderPieChart.propTypes = {
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

export default connect(mapStateToProps)(RenderPieChart);
