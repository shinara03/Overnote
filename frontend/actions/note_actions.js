import * as NUtil from '../util/note_api_util';

export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const REMOVE_NOTE = "REMOVE_NOTE";

export const recieveNotes = (notes) => {
  return {
    type: RECEIVE_NOTES, 
    notes
  }
}

export const recieveNote = (note) => {
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