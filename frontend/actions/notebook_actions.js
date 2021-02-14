import * as NBUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";
export const RECEIVE_NOTEBOOK_ERRORS = "RECEIVE_NOTEBOOK_ERRORS"
export const CLEAR_NOTEBOOK_ERRORS = "CLEAR_NOTEBOOK_ERRORS"

export const receiveNotebooks = (notebooks) => {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  }
}

export const receiveNotebook = (notebook) => {
  return {
    type: RECEIVE_NOTEBOOK,
    notebook
  }
}

export const removeNotebook = (notebook) => {
  return {
    type: REMOVE_NOTEBOOK,
    notebook
  }
}

export const receiveNotebookErrors = (errors) => {
  return {
    type: RECEIVE_NOTEBOOK_ERRORS,
    errors
  }
}


export const clearNBErrors = () => {
  return {
    type: CLEAR_NOTEBOOK_ERRORS
  }
}

export const fetchNotebooks = () => dispatch => {
  return NBUtil.fetchNotebooks()
          .then(notebooks => dispatch(receiveNotebooks(notebooks)))
}

export const fetchNotebook = id => dispatch => {
  return NBUtil.fetchNotebook(id)
        .then(notebook => dispatch(receiveNotebook(notebook)))
}

export const createNotebook = notebook => dispatch => {
  return NBUtil.createNotebook(notebook) 
        .then(notebook => dispatch(receiveNotebook(notebook)),
          error => dispatch(receiveNotebookErrors(error.responseJSON)))
}

export const updateNotebook = notebook => dispatch => {
  return NBUtil.updateNotebook(notebook)
        .then(notebook => dispatch(receiveNotebook(notebook)))
}

export const deleteNotebook = notebook => dispatch => {
  return NBUtil.deleteNotebook(notebook)
        .then(notebook => dispatch(removeNotebook(notebook)))
}