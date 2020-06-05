import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import './InboxPeople.scss'


class InboxPeople extends Component {

    clickPeople() {
        alert('123123')
    }

    render() {
        return (
            <React.Fragment>
                <Row style={{height: '100px', padding:'0',borderBottom:'solid',borderWidth:'1px',borderColor:'#c4c4c4'}}>
                    Chat
                </Row>
                <Row>
                    <div class="chat_list">
                        <div class="chat_people" onClick={this.clickPeople}>
                            <div class="chat_img"> 
                                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"></img>
                            </div>
                            <div class="chat_ib">
                            <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                            </div>
                        </div>
                    </div>
                    <div class="chat_list">
                        <div class="chat_people">
                            <div class="chat_img"> 
                                Day la anh 2
                                {/* <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil">  */}
                            </div>
                            <div class="chat_ib">
                            <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                            </div>
                        </div>
                    </div>
                    <div class="chat_list">
                        <div class="chat_people">
                            <div class="chat_img"> 
                                Day la anh 3
                                {/* <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil">  */}
                            </div>
                            <div class="chat_ib">
                            <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have all solutions 
                                astrology under one roof.</p>
                            </div>
                        </div>
                    </div>
                </Row>
            </React.Fragment>
        )
    }
}

export default InboxPeople