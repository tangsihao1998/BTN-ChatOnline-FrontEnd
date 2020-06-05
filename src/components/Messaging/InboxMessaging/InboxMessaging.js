import React, { Component } from 'react'
import InboxMessages from './InboxMessages'
import InboxPeople from './InboxPeople'
import Col from 'react-bootstrap/Col'
import './InboxMessing.scss';



class InboxMessaging extends Component {
    render() {
        return (
            <React.Fragment>
                <Col xs={3}>
                    <InboxPeople></InboxPeople>
                </Col>
                <Col xs={9}>
                    <InboxMessages></InboxMessages>
                </Col>
            </React.Fragment>
        )
    }
}

export default InboxMessaging