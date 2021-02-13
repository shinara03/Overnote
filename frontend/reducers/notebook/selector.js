export const makeNotebooksArr = ({ notebooks }) => {

  return Object.keys(notebooks).map(id => notebooks[id]);
}