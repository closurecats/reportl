import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllAttendees, markPresent, markAbsent } from '../actions/index';

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 225px',
};

const greenCardStyle = {
  display: 'block',
  borderStyle: 'solid',
  backgroundColor: 'green',
  height: '250px',
  width: '220px',
  margin: '10px',
  boxShadow: '10px 10px 5px lightgrey',
  borderWidth: 'thin',
  fontSize: 'x-large',
};

const redCardStyle = {
  display: 'block',
  borderStyle: 'solid',
  backgroundColor: 'red',
  height: '250px',
  width: '220px',
  margin: '10px',
  boxShadow: '10px 10px 5px lightgrey',
  borderWidth: 'thin',
  fontSize: 'x-large',
};

const thumbnailStyle = {
  height: '200px',
  width: '200px',
};

const blankUrl = 'http://static.wixstatic.com/media/2653cd_02a8474e57b5420e8ae1f5b25ce3685c.jpg_srz_700_700_85_22_0.50_1.20_0.00_jpg_srz';

class RenderAttendees extends Component {
  constructor(props) {
    super(props);

    const presentKids = this.props.attendees.filter(eachAttendee => eachAttendee.present);

    this.state = {
      present: presentKids,
    };
  }

  RenderAttendees() {
    return this.props.attendees.map(eachAttendee => (
      <button
        onClick={() => {
          const presentIndex = this.state.present.indexOf(eachAttendee.id);

          if (presentIndex === -1) {
            markPresent(eachAttendee.id);
            this.setState({ present: this.state.present.concat([eachAttendee.id]) });
          } else {
            markAbsent(eachAttendee.id);
            this.state.present.splice(presentIndex, 1);
            const newPresent = this.state.present.slice();
            this.setState({ present: newPresent });
          }

          setTimeout(() => getAllAttendees({ meeting: eachAttendee.meetingId }), 500);
        }}
        style={this.state.present.indexOf(eachAttendee.id) !== -1 ? greenCardStyle : redCardStyle}
      >
        <img
          style={thumbnailStyle}
          alt="Attendee"
          src={(eachAttendee.user.profilePhotoId && `/api/files/${eachAttendee.user.profilePhotoId}`) || blankUrl}
        />
        {/* <img alt="Attendee" src={eachAttendee.user.imgUrl} />   */}
        <div>{eachAttendee.user.fullName}</div>
      </button>
    ));
  }

  render() {
    return (
      <div style={containerStyle}>
        {this.RenderAttendees()}
      </div>
    );
  }
}

RenderAttendees.propTypes = {
  attendees: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllAttendees }, dispatch);
}

function mapStateToProps(state) {
  return {
    attendees: state.attendees,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderAttendees);
