import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions';

const _null = {
  name: null, 
  notebookId: null
}

const modalReducer = (state = _null, action) => {
  Object.freeze(state)
  
  switch (action.type) {
    case OPEN_MODAL:
      return {name: action.modal, notebookId: action.notebookId};
    case CLOSE_MODAL:
      return _null;
    default:
      return state;
  }

}

export default modalReducer;