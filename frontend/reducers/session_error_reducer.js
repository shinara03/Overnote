import {CLEAR_ERRORS, RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions'

const sessionErrorReducer = (state=[], action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_ERRORS:
      return [];
    default: 
      return state;
  }
}

export default sessionErrorReducer;