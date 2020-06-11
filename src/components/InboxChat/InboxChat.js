import React, { Component } from 'react'
import './InboxChat.scss'

// import material-UI
import { IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';

import { connect } from 'react-redux';
import { services } from './../../feathers';

import selectors from './../../redux/selectors';
import actions from './../../redux/actions';

// import components
import MessageHistory from './../MessageHistory';

class InboxChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        }
    }

    handleTextChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
    };
    
    handleSubmitMessage = async (e) => {
        e.preventDefault();
        this.setState({ message: ''});
        try {
            const { message } = this.state;

            const { roomId } = this.props;
            await this.props.createMessage(message, 'text', roomId)
            // Submit Message Here
        } catch (error) {
            console.log("InboxChat -> handleSubmitMessage -> error", error)
        }
    }

    render() {
        const { message } = this.state;
        return (
            <div className="Inbox__Chat">
                {/* Khung Message History */}
                <MessageHistory />
                {/* Khung Input */}
                <div className="Inbox_Input">
                    <form className='Input__form' onSubmit={this.handleSubmitMessage} >
                        <textarea 
                            type="textarea" 
                            className="Form__input" 
                            placeholder="Type a message" 
                            cols='1' 
                            rows='1'
                            name='message'
                            value={message}
                            onChange={this.handleTextChange}
                        />
                        <IconButton edge="start" className="Icon__dropdown" color="inherit" aria-label="menu" type="submit">
                            <Send />
                        </IconButton>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state,
    currentUser: selectors.getCurrentUser(state),
    roomId: selectors.getRoomId(state),
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    createMessage: async(message, type, roomId) => {
        await dispatch(services.messages.create({content: message, type: type, inRoom: roomId}))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(InboxChat);