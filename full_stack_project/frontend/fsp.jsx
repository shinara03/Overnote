import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<h1>WELCOME!</h1>, root);
  window.APIUtil = APIUtil;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
})