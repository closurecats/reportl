import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
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
      <div className="form">
        <h2 className="formTitle">Update My Profile</h2>
        <div className="label">Email</div>
        <input
          value={this.state.email}
          className="field"
          type="email"
          onChange={(event) => {
            this.onEmailChange(event.target.value);
          }}
        />
        <br />
        <div className="label">Personal Description</div>
        <input
          value={this.state.description}
          className="field"
          type="text"
          onChange={(event) => {
            this.onDescriptionChange(event.target.value);
          }}
        />
        <br />
        <div className="label">Address</div>
        <input
          value={this.state.address}
          className="field"
          type="text"
          onChange={(event) => {
            this.onAddressChange(event.target.value);
          }}
        />
        <br />
        <div className="label">Phone Number</div>
        <input
          value={this.state.phoneNumber}
          className="field"
          type="tel"
          onChange={(event) => {
            this.onPhoneChange(event.target.value);
          }}
        />
        <br />
        <Link to="/profile"><button
          type="submit"
          className="formButton"
          onClick={() => {
            this.props.createProfileInformation(this.state);
            this.onFormSubmit();
          }}

        >Submit</button></Link>
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
