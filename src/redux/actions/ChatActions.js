export const setRoomId = (roomId) => (dispatch) => {
	dispatch({ type: 'SET_ROOM_ID', payload: roomId });
};

export const setRoomTypeFilter = (type) => (dispatch) => {
	dispatch({ type: 'SET_ROOM_TYPE_FILTER', payload: type });
};
