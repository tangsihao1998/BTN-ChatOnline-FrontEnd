import React, { Component } from 'react'

import './EachMessage.scss';

class EachMessage extends Component {
  render() {
    // Ở đây gọi props để check xem là incoming or outgoing, example với this.state.type
    const { isOutgoing, message} = this.props;

    const dateObject = new Date(message.updatedAt);

    const time = dateObject.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const date = dateObject.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return (
      <React.Fragment>
        { isOutgoing ?
          (
            // {/* Message của mình */}
            <div className="Outgoing__message">
              <div className="Message__send">
                {/* Gọi message thay thế trong p */}
                <p>{message.content}</p>
                  {/* Date and time */}
                <span className="Time__date"> {time}    |    {date}</span>
              </div>
            </div>
          ):
          (
            //  {/* Message của người khác */}
            <div className="Incoming__message">
              <img className="User__Image" src={process.env.PUBLIC_URL + '/images/user.png'} alt="Incoming User"></img>
              <div className="Message__incoming">
                  <div className="Message">
                      {/* Gọi message thay thế trong p */}
                      <p>{message.content}</p>
                          {/* Date and time */}
                      <span className="Time__date"> {time}    |    {date}</span>
                  </div>
              </div>
            </div>
          )
        }
        
      </React.Fragment>
    )
  }
}

export default EachMessage;