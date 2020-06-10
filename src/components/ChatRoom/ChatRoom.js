import React, { Component } from 'react'

import './ChatRoom.scss';

class ChatRoom extends Component {
  // Render user tại đây
  render() {
    const { name, date, newestMessage } = this.props;
    return (
      <div className="Room">
        <div className="User__info">
          <img className="User__image" src={process.env.PUBLIC_URL + '/images/user.png'} alt="User Image" />
          <div className="chat_ib">
            {/* Name và date */}
            <h5>{name} <span class="chat_date">{date}</span></h5>
            {/* Newest Message */}
            <p>{newestMessage}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ChatRoom;