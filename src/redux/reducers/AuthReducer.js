export default initialState => (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_ERRORS':
      return {  
        ...state, 
        error: {
          ...payload.error,
        }
      };
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: {
          ...payload.currentUser,
          // clientId: payload.currentUser._id,
        }
      };
    case 'SIGN_OUT_USER':
      return {
        currentUser: null,
      };
    default:
      return state;
  }
};
