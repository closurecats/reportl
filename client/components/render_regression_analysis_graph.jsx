import React from 'react';
import ReactHighcharts from 'react-highcharts';
import regression from 'regression';
import { connect } from 'react-redux';

const RenderScatterPlotChart = ({ gradeData, selectedUserGraph, selectedClassGraph }) => {
  const regressionData = [];

  gradeData.forEach((item) => {
    if (item.users.fullName === selectedUserGraph &&
        item.classes.name === selectedClassGraph) {
      regressionData.push([item.gradeableobjects.id, item.grade]);
    }
  });

  const regressionLine = regression('linear', regressionData);

  const config = {
    title: 'Grades Regression',
    series: [
      {
        type: 'line',
        name: 'Trend',
        data: [regressionLine.points[0], regressionLine.points[regressionLine.points.length - 1]],
      },
      {
        type: 'scatter',
        name: 'Grade Data',
        data: regressionData,
      },
    ],
    xAxis: {
      title: {
        enabled: true,
        text: 'Day',
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },
    yAxis: [{
      title: 'Grade',
    }],
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -100,
      y: 70,
      floating: true,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
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
      <h3>Grading Trends for {selectedUserGraph} in {selectedClassGraph}</h3>
      <ReactHighcharts config={config} />
    </div>
  );
};

RenderScatterPlotChart.propTypes = {
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

export default connect(mapStateToProps)(RenderScatterPlotChart);
