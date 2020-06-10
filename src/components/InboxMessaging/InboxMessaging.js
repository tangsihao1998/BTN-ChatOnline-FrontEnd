import React, { Component } from 'react'
import InboxMessages from '../InboxMessages'
import InboxPeople from '../InboxPeople'
// import Col from 'react-bootstrap/Col'
import './InboxMessaging.scss';

class InboxMessaging extends Component {
    render() {
        return (
            <div className="Message__container">
                <div className="List__People">
                    <InboxPeople />
                </div>
                <div className="Container__Messages">
                    <InboxMessages />
                </div>
            </div>
        )
    }
}

export default InboxMessaging