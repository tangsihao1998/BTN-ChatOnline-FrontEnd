const initialState = {
	rooms: [],
	loading: false,
	error: null,
	roomId: null,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_ROOM_ID':
			return {
				...state,
				roomId: payload,
			};

		case 'CREATE_ROOM':
			let rooms = [ ...state.rooms, payload ];
			return {
				...state,
				rooms,
			};

		default:
			return state;
	}
};
