import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDepartmentInformation } from '../actions/index';

class RenderDepartments extends Component {
  componentWillMount() {
    this.props.getDepartmentInformation();
  }

  renderDepartments() {
    // return this.props.department.map(eachDepartment => (
    //   eachDepartment.map(singleDepartment =>
    //     <div>
    //       <li key={singleDepartment.id}>
    //         <div>ID: {singleDepartment.id}</div>
    //         <div>Name: {singleDepartment.name}</div>
    //       </li>
    //     </div>,
    //   )
    //
    // ));
    return this.props.departments.map(department => (
      <div key={department.id}>
        <li>
          <div>ID: {department.id}</div>
          <div>Name: {department.name}</div>
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
  departments: React.PropTypes.arrayOf(React.PropTypes.object),

};

function mapStateToProps(state) {
  return { departments: state.departments };
}

export default connect(mapStateToProps, { getDepartmentInformation })(RenderDepartments);
