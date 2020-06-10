import React, { Component } from 'react'

import './ChatRoom.scss';

class ChatRoom extends Component {
  // Render user tại đây
  render() {
    return (
      <div className="Room">
        <div className="User__info">
          <img className="User__image" src={process.env.PUBLIC_URL + '/images/user.png'} alt="User Image" />
          <div class="chat_ib">
            {/* Name và date */}
            <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
            {/* Newest Message */}
            <p>Test, which is a new approach to have all solutions 
                astrology under one roof.</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ChatRoom;