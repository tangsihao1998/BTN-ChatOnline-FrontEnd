import React, { Component } from 'react'
import './InboxChat.scss'

// import material-UI
import { IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';

// import components
import MessageHistory from './../MessageHistory';

class InboxChat extends Component {
    handleSubmitMessage = (e) => {
        e.preventDefault();
        // Submit Message Here
    }
    render() {
        return (
            <div className="Inbox__Chat">
                {/* Khung Message History */}
                <MessageHistory />
                {/* Khung Input */}
                <div className="Inbox_Input">
                    <form className='Input__form' onSubmit={this.handleSubmitMessage} >
                        <textarea type="textarea" className="Form__input" placeholder="Type a message" cols='1' rows='1'/>
                        <IconButton edge="start" className="Icon__dropdown" color="inherit" aria-label="menu" type="submit">
                            <Send />
                        </IconButton>
                    </form>
                </div>
            </div>
        )
    }
}

export default InboxChat;