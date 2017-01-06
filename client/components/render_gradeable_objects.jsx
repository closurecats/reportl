import React, { Component } from 'react';
import { connect } from 'react-redux';

class RenderGradeables extends Component {
  renderGradeables() {
    console.log('props: gradeables: ', this.props.gradeables);
    return this.props.gradeables.map(eachObj => (
      <div>
        <div key={eachObj.objectName}>
          <div>Name: {eachObj.objectName}</div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h3>Assignments</h3>
        {this.renderGradeables()}
      </div>
    );
  }
}

RenderGradeables.propTypes = {
  gradeables: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  console.log('state in mapStateToProps: ', state);
  return {
    gradeables: state.meeting.gradeable_objects || [],
  };
}

export default connect(mapStateToProps)(RenderGradeables);

