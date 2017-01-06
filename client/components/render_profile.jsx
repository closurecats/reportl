import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileInformation } from '../actions/index';

class RenderProfile extends Component {
  componentWillMount() {
    this.props.getProfileInformation();
  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <ul>
          <li>{this.props.profile.fullName}</li>
          <li>{this.props.profile.image}</li>
          <li>{this.props.profile.email}</li>
          <li>{this.props.profile.description}</li>
          <li>{this.props.profile.address}</li>
          <li>{this.props.profile.phone}</li>
          <li>{this.props.profile.dob}</li>
        </ul>
      </div>
    );
  }
}

RenderProfile.propTypes = {
  getProfileInformation: React.PropTypes.func,
  profile: React.PropTypes.shape({
    fullName: React.PropTypes.string,
    image: React.PropTypes.string,
    email: React.PropTypes.string,
    description: React.PropTypes.string,
    address: React.PropTypes.string,
    phone: React.PropTypes.string,
    dob: React.PropTypes.string,
  }),
};

function mapStateToProps(state) {
  return { profile: state.profile };
}

export default connect(mapStateToProps, { getProfileInformation })(RenderProfile);
