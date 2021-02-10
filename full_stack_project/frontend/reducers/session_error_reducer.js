import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions'

const sessionErrorReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      let session_errors = action.errors;
      return session_errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default: 
      return state;
  }
}

export default sessionErrorReducer;