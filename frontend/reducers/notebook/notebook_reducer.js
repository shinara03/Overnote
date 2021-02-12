import {REMOVE_NOTEBOOK, RECEIVE_NOTEBOOK, RECEIVE_NOTEBOOKS} from '../../actions/notebook_actions';

const notebookReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      return Object.assign({}, action.notebooks);

    case RECEIVE_NOTEBOOK:
      return Object.assign({}, state, {[action.notebook.id]: action.notebook});

    case REMOVE_NOTEBOOK:
      let nextState = Object.assign({}, state);
      delete nextState[action.notebook.id];
      return nextState;

    default:
      return state;
  }
}

export default notebookReducer;