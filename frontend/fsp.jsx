import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';
import * as nbUtil from './util/notebook_api_util';
import {logout, login} from './actions/session_actions';
import { receiveNotebooks, fetchNotebooks, fetchNotebook, createNotebook,
         updateNotebook, deleteNotebook} from './actions/notebook_actions';
import * as NUtil from './util/note_api_util';
import * as noteActions from './actions/note_actions';

document.addEventListener("DOMContentLoaded", () => {
  //to make user stay logged in 
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { id: window.currentUser.id}
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);


  //Testing
  window.APIUtil = APIUtil;
  window.nbUtil = nbUtil;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout= logout;
  window.fetchNotebook = fetchNotebook;
  window.fetchNotebooks = fetchNotebooks;
  window.createNotebook = createNotebook;
  window.updateNotebook = updateNotebook;
  window.deleteNotebook = deleteNotebook;
  window.receiveNotebooks = receiveNotebooks;
  window.NUtil = NUtil;
  window.noteActions = noteActions;
})