import React, { Component } from 'react'
import './InboxChat.scss'

// import material-UI
import { IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';
// import feathers redux
import { connect } from 'react-redux';
import { services } from '../../feathers';
import selectors from '../../redux/selectors';

// import components
import MessageHistory from './../MessageHistory';

class InboxChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
    }

    async componentDidMount() {
        // await this.props.getMessages(roomId);
        this.setState({
            messages: this.props.currentMessagesQuery,
        });
    }

    renderMessage(message, currentUser) {
        const isOutgoing = message.sender === currentUser._id;
        return (
            <div></div>
        );
    }

    handleSubmitMessage = (e) => {
        e.preventDefault();
        // Submit Message Here
    }
    render() {
        const { currentUser } = this.props;
        
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

const mapStateToProps = (state) => ({
    state,
    currentUser: selectors.getCurrentUser(state),
    currentMessagesQuery: selectors.getCurrentMessagesQuery(state),
}); 

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  getMessages: async (roomId) => {
    await dispatch(services.messages.find({
        query: {
            inRoom: roomId,
        },
    }));
  },
  getNextMessages: async (roomId, messageCount) => {
      await dispatch(services.messages.find({
          skip: messageCount,
          query: {
              inRoom: roomId,
          },
      }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InboxChat);