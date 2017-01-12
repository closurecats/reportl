import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileInformation } from '../actions/index';

class RenderProfile extends Component {
  componentWillMount() {
    this.props.getProfileInformation(this.props.user.id);
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <img alt="Profile Pic" src={`/api/files/${this.props.profile.profilePhotoId}`} />
        <ul>
          <li>{this.props.profile.fullName}</li>
          <li>{this.props.profile.email}</li>
          <li>{this.props.profile.address}</li>
        </ul>
      </div>
    );
  }
}

RenderProfile.propTypes = {
  getProfileInformation: React.PropTypes.func,
  user: React.PropTypes.obj,
  profile: React.PropTypes.shape({
    fullName: React.PropTypes.string,
    email: React.PropTypes.string,
    description: React.PropTypes.string,
    address: React.PropTypes.string,
    phone: React.PropTypes.string,
    dob: React.PropTypes.string,
    profilePhotoId: React.PropTypes.number,
  }),
};

function mapStateToProps(state) {
  return {
    profile: state.profile,
    user: state.user,
  };
}

export default connect(mapStateToProps, { getProfileInformation })(RenderProfile);
