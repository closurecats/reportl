import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTeachers, deleteUser } from '../actions/index';

class RenderTeachers extends Component {
  componentWillMount() {
    this.props.getAllTeachers();
  }

  renderTeachers() {
    return this.props.allTeachers.map(eachTeacher => (
      <div className="userCard">
        <img className="userThumbnail" alt="profile" src={`/api/files/${eachTeacher.profilePhotoId}`} />
        <div className="userText" key={eachTeacher.email}>
          <div>Name: {eachTeacher.fullName}</div>
          <div>Email: {eachTeacher.email}</div>
          <button
            className="userButton"
            onClick={() => {
              deleteUser(eachTeacher.id);
              this.props.getAllTeachers();
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="userCardContainer">
        {this.renderTeachers()}
      </div>
    );
  }
}

RenderTeachers.propTypes = {
  getAllTeachers: React.PropTypes.func,
  allTeachers: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return {
    allTeachers: state.allTeachers,
  };
}

export default connect(mapStateToProps, { getAllTeachers })(RenderTeachers);
