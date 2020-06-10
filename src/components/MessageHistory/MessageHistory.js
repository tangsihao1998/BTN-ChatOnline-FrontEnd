import React, { Component } from 'react'

import './MessageHistory.scss';

import EachMessage from './../EachMessage';

class MessageHistory extends Component {
  render() {
    return (
        <div className="Message__history">
            {/* Truyền props vào để render ví dụ */}
            {/* <EachMessage message={eachMessage}/> */}
            <EachMessage />        
        </div>
    )
  }
}

export default MessageHistory;