import React, { Component } from 'react'

import './ChatRoom.scss';

class ChatRoom extends Component {
  // Render user tại đây
  render() {
    const { name, dateTime, newestMessage, onClick } = this.props;
    let time, date;
    if (!dateTime) {
      time = null;
      date = null;
    } else {
      const dateObject = new Date(dateTime);

      time = dateObject.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });

      date = dateObject.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }

    return (
      <div className="Room" onClick={onClick}>
        <div className="User__info">
          <img className="User__image" src={process.env.PUBLIC_URL + '/images/user.png'} alt="User Image" />
          <div className="chat_ib">
            {/* Name và date */}
            <h5>{name} <span className="chat_date">{time}    |    {date}</span></h5>
            {/* Newest Message */}
            <p>{newestMessage}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ChatRoom;