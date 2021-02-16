import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveErrors = (errors) => {
  // debugger
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}
//thunk action creators
export const login = (user) => dispatch => {
  return APIUtil.login(user)
        .then(currUser => dispatch(receiveCurrentUser(currUser)),
        error => dispatch(receiveErrors(error.responseJSON)))
}

export const logout = () => dispatch => {
  return APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
}

export const signup = (user) => dispatch => {
  return APIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)))
}