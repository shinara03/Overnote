import * as NUtil from '../util/note_api_util';

export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const REMOVE_NOTE = "REMOVE_NOTE";

export const receiveNotes = (notes) => {
  return {
    type: RECEIVE_NOTES, 
    notes
  }
}

export const receiveNote = (note) => {
  return {
    type: RECEIVE_NOTE,
    note
  }
}

export const removeNote = (note) => {
  return {
    type: REMOVE_NOTE,
    note
  }
}

export const fetchNotes = () => dispatch => {
  return NUtil.fetchNotes()
          .then(notes => dispatch(receiveNotes(notes)))
}

export const fetchNote = noteId => dispatch => {
  return NUtil.fetchNote(noteId)
          .then(note => dispatch(receiveNote(note)))
}

export const createNote = note => dispatch => {
  return NUtil.createNote(note)
          .then(note => dispatch(receiveNote(note)))
}

export const updateNote = note => dispatch => {
  return NUtil.updateNote(note)
          .then(note => dispatch(receiveNote(note)))
}

export const deleteNote = noteId => dispatch => {
  return NUtil.deleteNote(noteId)
          .then(note => dispatch(removeNote(note)))
}