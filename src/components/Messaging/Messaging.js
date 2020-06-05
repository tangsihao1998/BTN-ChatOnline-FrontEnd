import React, { Component } from 'react'
import SelectedOptions from './SelectedOptions'
import InboxMessaging from './InboxMessaging'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';


class Messaging extends Component {
    render() {
        return (
            // <React.Fragment>
                <Container style={{maxWidth: '100%', height: '100%'}}>
					<Row>
						<SelectedOptions></SelectedOptions>
                    </Row>
                    <Row style={{height:'100%'}}>
                        <InboxMessaging></InboxMessaging>
                    </Row>
                </Container>
            // </React.Fragment>
        )
    }
}

export default Messaging