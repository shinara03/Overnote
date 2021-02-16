export const makeNoteArr = ({ notes }) => {

  return Object.keys(notes).map(id => notes[id]);
}