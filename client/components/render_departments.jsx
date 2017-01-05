import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getDepartmentInformation, getCourseDetails } from '../actions/index';

class RenderDepartments extends Component {
  componentWillMount() {
    this.props.getDepartmentInformation();
  }

  renderDepartments() {
    return this.props.departments.map(department => (
      <div key={department.id}>
        <li>{department.name}
          <div>
            {department.courses.map(course => (
              <button onClick={() => this.props.getCourseDetails(course.id)}>
                <Link to="/coursecatalog/department/course">{course.name}</Link>
              </button>
            ))}
          </div>
        </li>
      </div>
    ));
  }
  render() {
    return (
      <div>
        <h3>Departments</h3>
        <ul>
          {this.renderDepartments()}
        </ul>
      </div>
    );
  }

}

RenderDepartments.propTypes = {
  getDepartmentInformation: React.PropTypes.func,
  getCourseDetails: React.PropTypes.func,
  departments: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDepartmentInformation, getCourseDetails }, dispatch);
}

function mapStateToProps(state) {
  return { departments: state.departments };
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderDepartments);
