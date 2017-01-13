import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllStudents, deleteUser } from '../actions/index';

class RenderUsers extends Component {
  componentWillMount() {
    this.props.getAllStudents();
  }

  renderStudents() {
    return this.props.allStudents.map(eachStudent => (
      <div className="userCard">
        <img className="userThumbnail" alt="profile" src={`/api/files/${eachStudent.profilePhotoId}`} />
        <div className="userText" key={eachStudent.email}>
          <div>{eachStudent.fullName}</div>
          <div>{eachStudent.email}</div>
          <button
            className="userButton"
            onClick={() => {
              deleteUser(eachStudent.id);
              this.props.getAllStudents();
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
        {this.renderStudents()}
      </div>
    );
  }
}

RenderUsers.propTypes = {
  getAllStudents: React.PropTypes.func,
  allStudents: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return {
    allStudents: state.allStudents,
  };
}

export default connect(mapStateToProps, { getAllStudents })(RenderUsers);
