export const makeNotebooksArr = ({ notebooks }) => {

  return Object.keys(notebooks).map(id => notebooks[id]);
}

export const selectNotebook = ({ notebooks }, notebookId) => {
  return notebooks[notebookId] || {noteIds: []};
}

export const selectNotesforNotebook = ({ notes }, notebook) => {
  return notebook.noteIds.map(noteId => notes[noteId]);
}