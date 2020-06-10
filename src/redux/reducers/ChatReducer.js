export default (initialState) => (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_ROOM_ID':
			return {
				...state,
				roomId: payload,
			};
		case 'SET_ROOM_TYPE_FILTER':
			return {
				...state,
				roomTypeFilter: payload,
			};
		default:
			return state;
	}
};
