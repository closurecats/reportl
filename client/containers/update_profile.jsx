import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createProfileInformation } from '../actions/index';

class UpdateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.user.id,
      email: '',
      description: '',
      address: '',
      phoneNumber: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event });
  }

  onDescriptionChange(event) {
    this.setState({ description: event });
  }

  onAddressChange(event) {
    this.setState({ address: event });
  }

  onPhoneChange(event) {
    this.setState({ phoneNumber: event });
  }

  onFormSubmit() {
    this.setState({
      email: '',
      description: '',
      address: '',
      phoneNumber: '',
      dateOfBirth: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Update My Profile</h2>
        <p>Email</p>
        <input
          value={this.state.email}
          type="email"
          onChange={(event) => {
            this.onEmailChange(event.target.value);
          }}
        />
        <br />
        <p>Personal Description</p>
        <input
          value={this.state.description}
          type="text"
          onChange={(event) => {
            this.onDescriptionChange(event.target.value);
          }}
        />
        <br />
        <p>Address</p>
        <input
          value={this.state.address}
          type="text"
          onChange={(event) => {
            this.onAddressChange(event.target.value);
          }}
        />
        <br />
        <p>Phone Number</p>
        <input
          value={this.state.phoneNumber}
          type="tel"
          onChange={(event) => {
            this.onPhoneChange(event.target.value);
          }}
        />
        <br />
        <button
          type="submit"
          onClick={() => {
            this.props.createProfileInformation(this.state);
            this.onFormSubmit();
          }}

        >Submit</button>
      </div>
    );
  }
}

UpdateProfile.propTypes = {
  createProfileInformation: React.PropTypes.func,
  user: React.PropTypes.obj,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createProfileInformation }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
