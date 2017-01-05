import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderDailySchedule from './myDailySchedule';

class myProfile extends Component {

  render() {
    return (
      <div>
        <h2>All Classes</h2>
        <renderDailySchedule />
      </div>
    );
  }
}

RenderClasses.propTypes = {
};

function mapStateToProps(state) {
  return { allClasses: state.allClasses };
}

export default connect(mapStateToProps, { getAllClasses })(myProfile);
