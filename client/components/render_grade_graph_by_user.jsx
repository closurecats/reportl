import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import { connect } from 'react-redux';
import { getChartData } from '../actions/index';

class RenderGradeChartByUser extends Component {

  componentWillMount() {
    this.props.getChartData();
  }

  render() {
    const temporaryObject = {};
    const userArray = [];

    this.props.gradeData.forEach((item) => {
      if (!temporaryObject[item.users.fullName]) {
        temporaryObject[item.users.fullName] = {
          gradeableobjects: [],
        };
      } else {
        temporaryObject[item.users.fullName].gradeableobjects.push({
          name: item.gradeableobjects.objectName,
          y: item.grade,
        });
      }
    });

    Object.keys(temporaryObject).forEach((userData) => {
      userArray.push({
        title: userData,
        series: [{
          name: `Grades for ${userData}`,
          data: temporaryObject[userData].gradeableobjects,
        }],
        yAxis: [{
          title: 'Grades',
        }],
        xAxis: [{
          type: 'category',
        }],
        data: temporaryObject[userData].gradeableobjects,
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
      });
    });

    return (
      <div>
        {userArray.map(item => (
          <ReactHighcharts config={item} />
        ))}
      </div>
    );
  }
}

RenderGradeChartByUser.propTypes = {
  getChartData: React.PropTypes.func,
  gradeData: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return { gradeData: state.gradeData };
}

export default connect(mapStateToProps, { getChartData })(RenderGradeChartByUser);
