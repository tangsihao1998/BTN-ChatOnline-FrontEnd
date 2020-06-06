import React, { Component } from 'react'
// import Row from 'react-bootstrap/Row'
import './InboxPeople.scss'


class InboxPeople extends Component {

    clickPeople() {
        alert('123123')
    }

    render() {
        return (
            <div className="Inbox_People">
                <div className="InboxPeople_Title" style={{height: '100px', padding:'0',borderBottom:'solid',borderWidth:'1px',borderColor:'#c4c4c4'}}>
                    Chat
                </div>
                <div className="InboxPeople_List">
                    <div class="chat_list">
                        <div class="chat_people" onClick={this.clickPeople}>
                            <div class="chat_img"> 
                                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"></img>
                            </div>
                            <div>
                            <div class="chat_ib">
                                <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                                <p>Test, which is a new approach to have all solutions 
                                    astrology under one roof.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InboxPeople