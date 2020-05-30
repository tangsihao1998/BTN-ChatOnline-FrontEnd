export const setRoomId = (roomId) => (dispatch) => {
	dispatch({ type: 'SET_ROOM_ID', payload: { roomId } });
};

export const createRoom = () => (dispatch, { getFirestore }) => {
	const firestore = getFirestore();
	const room = {
		members: [],
		messages: [],
	};
	return firestore.add('rooms', room).then(() => {
		dispatch({ type: 'CREATE_ROOM', payload: room });
	});
};

export const sendMessage = (roomId, message) => (dispatch, { getFirestore }) => {
	const firestore = getFirestore();
	const roomRef = firestore.collection('rooms').doc(roomId);
	return roomRef.collection('messages').add(message).then(() => {
		dispatch({ type: 'SEND_MESSAGE', payload: message });
	});
};
