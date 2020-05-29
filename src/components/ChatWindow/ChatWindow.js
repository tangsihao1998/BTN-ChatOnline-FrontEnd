import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import './ChatWindow.scss';

import actions from './../../redux/actions';
import selectors from '../../redux/selectors';

class ChatWindow extends Component {
	render() {
		const { error, loading, messages, sendMessage } = this.props;

		if (error) {
			return <div>Error loading messages! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading messages...</div>;
		}

		return (
			<div>
				<button onClick={() => sendMessage({ type: 'text', content: 'Hello' })}>Send test msg</button>
				<div>
					Messages:
					{messages ? messages.map((message, i) => <div key={i}>{message.content}</div>) : <div>Loading...</div>}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	roomId: selectors.getRoomId(state),
	messages: state.firestore.ordered.messages,
});

const mapDispatchToProps = (dispatch) => ({
	dispatch,
	setRoomId: (roomId) => dispatch(actions.setRoomId(roomId)),
	sendMessage: (roomId, message) => dispatch(actions.sendMessage(roomId, message)),
	createRoom: () => dispatch(actions.createRoom()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);
