import React from 'react';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rsvp_events: this.props.currentUser.rsvp_events
    }
    this.changeRSVPStatus = this.changeRSVPStatus.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id)
  }

  changeRSVPStatus(e) {
    if (this.props.currentUser.rsvp_events.includes(this.props.eventId)) {
      let eventIdx = this.props.currentUser.rsvp_events.indexOf(this.props.eventId)
      let removedEvent = this.props.currentUser.rsvp_events.splice(eventIdx, 1)
      this.setState({
        rsvp_events: this.props.currentUser.rsvp_events
      });
    } else {
      this.setState({
        rsvp_events: this.props.currentUser.rsvp_events.push(this.props.eventId)
      });
    }
  }

  render() {
    let rsvp_button;

    if (this.props.currentUser.rsvp_events.includes(this.props.eventId)) {
      rsvp_button = <button onClick={this.changeRSVPStatus} className="rsvp-button-checked">	&#10004; Going</button>
    } else {
      rsvp_button = <button onClick={this.changeRSVPStatus} className="rsvp-button">RSVP</button>
    };

    return (
      <div className="event-show-component">
        <div className="event-show-container">
          <img className="artist-image"></img>
          <div className= "event-info">
            <h2>{this.props.artistName}</h2>
            {this.props.date} @ {this.props.venueName}
            <br></br>
            {this.props.venueCity}, {this.props.venueState}
            {rsvp_button}
          </div>
        </div>

        <div className="event-description">
          <ul>

            <li>{this.props.venueName}</li>
            <li>{this.props.venueAddress}</li>
            <li>{this.props.venueCity}, {this.props.venueState}</li>
            <br></br>
            <br></br>
            <li>{this.props.artistName}</li>
          </ul>
        </div>

      </div>
    );
  }
}


export default EventShow;