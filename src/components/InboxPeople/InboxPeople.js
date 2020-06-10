import React, { Component } from 'react'
// import Row from 'react-bootstrap/Row'
import './InboxPeople.scss'

// import components
import ChatRoom from './../ChatRoom';

class InboxPeople extends Component {
    chooseRoom = (e) => {
        alert('choose Room')
    }

    render() {
        return (
            <div className="List__Container">
                <div className="Container__Title"></div>
                <div className="List__Room" onClick={this.chooseRoom}>
                    {/* Viết hàm render room tại đây */}
                  <ChatRoom />
                </div>
            </div>
        )
    }
}

export default InboxPeople