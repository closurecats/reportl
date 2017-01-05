import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllClasses } from '../actions/index';

class RenderClasses extends Component {

  componentWillMount() {
    this.props.getAllClasses();
  }

  renderClasses() {
    return this.props.allClasses.map(eachClassItem =>
      <li key={eachClassItem.name}>
        <h3><strong>Class Name:</strong> {eachClassItem.name}</h3>
        <div><strong>Modules:</strong></div>
        {eachClassItem.modules.map(modules => (
          <div>
            <p><strong>{modules.moduleName}</strong></p>
            <p>Percent of Grade: {modules.percentOfClassGrade}</p>
          </div>
        ))}
      </li>);
  }

  render() {
    return (
      <div>
        <h2>All Classes</h2>
        <ol>
          {this.renderClasses()}
        </ol>
      </div>
    );
  }
}

RenderClasses.propTypes = {
  getAllClasses: React.PropTypes.func,
  allClasses: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return { allClasses: state.allClasses };
}

export default connect(mapStateToProps, { getAllClasses })(RenderClasses);
