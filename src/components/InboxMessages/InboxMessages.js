import React, { Component } from 'react'
// import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
import InboxChat from './InboxChat/InboxChat'
import InboxSettings from './InboxSettings/InboxSettings'
import './InboxMessges.scss'

class InboxMessages extends Component {
    render() {
        return (
            <div className="Inbox_Container" style={{maxWidth: '100%'}}>
                <div id="rowHeader">Name : </div>
                <div className="Container_Inbox_Chat_Settings" style={{height:'100%'}}>
                    <div className="Inbox_Chat">
                        <InboxChat></InboxChat>                     
                    </div>
                    <div className="Inbox_Settings">
                        <InboxSettings></InboxSettings>
                    </div>
                </div>
            </div>
        )
    }
}

export default InboxMessages