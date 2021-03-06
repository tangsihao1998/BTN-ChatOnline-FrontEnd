import React, { Component } from 'react';

import './MessageHistory.scss';

// import feathers redux
import { connect } from 'react-redux';
import { client, services } from '../../feathers';
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
		// Set up event listeners
		const messageService = client.service('messages');
		messageService.on('created', (message, context) => {
			this.props.onCreateMessage(message);
			// Push new message to state
			this.state.messages.push(message)
		});
		messageService.on('patched', (message, context) => {
			this.props.onPatchMessage(message);
			// Update message
		});
		messageService.on('updated', (message, context) => {
			this.props.onUpdateMessage(message);
			// Update message
		});
		messageService.on('removed', (message, context) => {
			this.props.onRemoveMessage(message);
			// Delete message
		});

		// messageService.on('created', (data) => {
		// 	alert(`onCreate::data: ${data}`);
		// 	this.props.store.dispatch(services.messages.onCreated(data));
		// });

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
	onCreateMessage: (message) => dispatch(services.messages.onCreated(message)),
	onUpdateMessage: (message) => dispatch(services.messages.onUpdated(message)),
	onPatchMessage: (message) => dispatch(services.messages.onPatched(message)),
	onRemoveMessage: (message) => dispatch(services.messages.onRemoved(message)),
});



export default connect(mapStateToProps, mapDispatchToProps)(MessageHistory);
