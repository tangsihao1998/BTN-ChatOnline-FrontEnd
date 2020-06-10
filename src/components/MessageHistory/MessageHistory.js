import React, { Component } from 'react'

import './MessageHistory.scss';

// import feathers redux
import { connect } from 'react-redux';
import { services } from '../../feathers';
import selectors from '../../redux/selectors';

import EachMessage from './../EachMessage';

class MessageHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  async componentDidMount() {
    const roomId = this.props.roomId;
    await this.props.getMessages(roomId);
    this.setState({
      messages: this.props.currentMessagesQuery,
    });
  }

  render() {
    const { messages } = this.state;
    const { currentUser } = this.props;
    return (
      <div className="Message__history">
        {
          messages.forEach((message) => {
            const isOutgoing = message.sender === currentUser._id;
            return <EachMessage isOutgoing={isOutgoing} message={message}></EachMessage>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    state,
    currentUser: selectors.getCurrentUser(state),
    currentMessagesQuery: selectors.getCurrentMessagesQuery(state),
    roomId: selectors.getRoomId(state),
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

export default connect(mapStateToProps, mapDispatchToProps)(MessageHistory);