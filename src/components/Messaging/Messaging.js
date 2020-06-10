import React, { Component } from 'react'
import SelectedOptions from './../SelectedOptions'
import InboxMessaging from './../InboxMessaging'
// import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'

import './Messaging.scss'

class Messaging extends Component {
    render() {
        return (
            <div className="Messaging">
                <SelectedOptions />
                <InboxMessaging />
            </div>
        )
    }
}

export default Messaging