import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getChartData, setSelectedClass } from '../actions/index';

class RenderGradeChartByUser extends Component {

  componentWillMount() {
    this.props.getChartData();
    this.props.setSelectedClass('American Literature');
  }

  render() {
    const temporaryObject = {};
    const userArray = [];

    this.props.gradeData.forEach((item) => {
      if (!temporaryObject[item.users.fullName]) {
        if (item.classes.name === this.props.selectedClassGraph) {
          temporaryObject[item.users.fullName] = {
            gradeableobjects: [{
              name: item.gradeableobjects.objectName,
              y: item.grade,
            }],
          };
        }
      } else if (item.classes.name === this.props.selectedClassGraph) {
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
          <div>
            <br />
            <ReactHighcharts config={item} />
          </div>
        ))}
      </div>
    );
  }
}

RenderGradeChartByUser.propTypes = {
  getChartData: React.PropTypes.func,
  gradeData: React.PropTypes.arrayOf(React.PropTypes.object),
  selectedClassGraph: React.PropTypes.string,
  setSelectedClass: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedClass, getChartData }, dispatch);
}

function mapStateToProps(state) {
  return {
    gradeData: state.gradeData,
    selectedClassGraph: state.selectedClassGraph,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderGradeChartByUser);
