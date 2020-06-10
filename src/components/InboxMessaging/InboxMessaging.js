import React, { Component } from 'react'
import InboxMessages from '../InboxMessages'
import InboxPeople from '../InboxPeople'
// import Col from 'react-bootstrap/Col'
import './InboxMessing.scss';



class InboxMessaging extends Component {
    render() {
        return (
            <div className="Messaging__Inbox">
                <div className="Inbox__People">
                    <InboxPeople></InboxPeople>
                </div>
                <div className="Inbox__Messages">
                    <InboxMessages></InboxMessages>
                </div>
            </div>
        )
    }
}

export default InboxMessaging