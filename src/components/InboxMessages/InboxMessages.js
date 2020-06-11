import React, { Component } from 'react'
// import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
import InboxChat from '../InboxChat/InboxChat'
import InboxSettings from '../InboxSettings/InboxSettings'
import './InboxMessages.scss'

class InboxMessages extends Component {
    render() {
        return (
            <div className="Inbox__Container" style={{maxWidth: '100%'}}>
                {/* Get Current Room Name */}
                <div className="Inbox__name">Name: {}</div>

                {/* Khung Chat + Khung Settings */}
                <div className="Container__InboxAndSettings" style={{height:'100%'}}>
                    {/* Khung Chat */}
                    <InboxChat />                   

                    {/* Khung Settings */}
                    <div className="Inbox_Settings">
                        <InboxSettings></InboxSettings>
                    </div>
                </div>
            </div>
        )
    }
}

export default InboxMessages