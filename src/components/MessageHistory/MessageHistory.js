import React, { Component } from 'react';

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
      roomId: null,
			messages: [],
			// Define mức scroll point để làm lazy load
			// scrollPoint: 800,
		};
	}

	async componentDidMount() {
		// window.onscroll = () => {
		// const {scrollPoint} = this.state;
    //   if(window.pageYOffset > scrollPoint ) {
		// 		// Get next message tại đây  
		//		// Gọi hàm để lấy message tiếp theo
		// 
		// 		//Set lại scroll point mới
		// 		const newScrollPoint = scrollPoint + *mức scroll*
		// 		this.setState ({scrollPoint})
    //   }
    // }
	}

	async componentWillReceiveProps(nextProps) {
    console.log(`${this.props.roomId}::${nextProps.roomId}`);
    if (this.props.roomId !== nextProps.roomId) { // On roomId change
      await this.props.getMessages(nextProps.roomId)
      this.setState({
				messages: this.props.currentMessagesQuery,
      });
    }
	}

	render() {
		const { messages } = this.state;
		const { currentUser } = this.props;
		return (
			<div className="Message__history">
				{messages.map((message) => {
					const isOutgoing = message.sender._id === currentUser._id;
					return <EachMessage key={message._id} isOutgoing={isOutgoing} message={message} />;
				})}
			</div>
		);
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
		await dispatch(
			services.messages.find({
				query: {
					inRoom: roomId,
				},
			})
		);
	},
	getNextMessages: async (roomId, messageCount) => {
		await dispatch(
			services.messages.find({
				skip: messageCount,
				query: {
					inRoom: roomId,
				},
			})
		);
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageHistory);
