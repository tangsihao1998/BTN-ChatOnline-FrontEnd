export const setCurrentUser = currentUser => dispatch => {
  dispatch({ type: 'SET_CURRENT_USER', payload: { currentUser } });
};

export const signOutUser = () => dispatch => {
  dispatch({ type: 'SIGN_OUT_USER' });
};

export const setError = error => dispatch => {
  dispatch({ type: 'SET_ERRORS', payload: { error } });
};
