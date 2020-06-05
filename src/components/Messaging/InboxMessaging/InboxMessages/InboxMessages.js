import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import InboxChat from './InboxChat/InboxChat'
import InboxSettings from './InboxSettings/InboxSettings'
import './InboxMessges.scss'

class InboxMessages extends Component {
    render() {
        return (
            <Container style={{maxWidth: '100%',height:'100%'}}>
                <Row id="rowHeader">Name : </Row>
                <Row style={{height:'100%'}}>
                    <Col xs={8}>
                        <InboxChat></InboxChat>
                    </Col>
                    <Col xs={4}>
                        <InboxSettings></InboxSettings>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default InboxMessages