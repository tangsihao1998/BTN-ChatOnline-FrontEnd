import React, { Component } from 'react'
import './InboxChat.scss'

import { connect } from 'react-redux';
import { services } from '../../../../feathers';

import selectors from '../../../../redux/selectors';

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

    render() {
        const { currentUser } = this.props;
        
        return (
            <div className="Inbox_Chat_Component">
                <div class="msg_history">
                    <div class="incoming_msg">
                        <div class="incoming_msg_img"> 
                            <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"></img>
                        </div>
                        <div class="received_msg">
                            <div class="received_withd_msg">
                                <p>Test which is a new approach to have all
                                    solutions</p>
                                <span class="time_date"> 11:01 AM    |    June 9</span>
                            </div>
                        </div>
                    </div>
                    <div class="outgoing_msg">
                        <div class="sent_msg">
                            <p>Test which is a new approach to have all
                            solutions</p>
                            <span class="time_date"> 11:01 AM    |    June 9</span> 
                        </div>
                    </div>
                    <div class="incoming_msg">
                        <div class="incoming_msg_img"> 
                            <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"></img> 
                        </div>
                        <div class="received_msg">
                            <div class="received_withd_msg">
                                <p>Test, which is a new approach to have</p>
                                <span class="time_date"> 11:01 AM    |    Yesterday</span>
                            </div>
                        </div>
                    </div>
                    <div class="outgoing_msg">
                        <div class="sent_msg">
                            <p>Apollo University, Delhi, India Test</p>
                            <span class="time_date"> 11:01 AM    |    Today</span> 
                        </div>
                    </div>
                </div>
                <div className="Inbox_Input">
                    <div class="type_msg">
                        <div class="input_msg_write">
                            <input type="text" class="write_msg" placeholder="Type a message" />
                            <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                        </div>
                    </div>
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