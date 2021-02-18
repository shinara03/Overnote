import { connect } from 'react-redux';
import { fetchNotebook} from '../../../actions/notebook_actions';
import NotebookShow from './notebook_show';
import {selectNotebook, selectNotesforNotebook} from '../../../reducers/notebook/selector';
import { fetchNotes } from '../../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  const notebookId = parseInt(ownProps.match.params.notebookId);
  const notebook = selectNotebook(state.entities, notebookId);
  const notes = selectNotesforNotebook(state.entities, notebook)
  return {
    notebookId,
    notebook,
    notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotebook: id => dispatch(fetchNotebook(id)),
    fetchNotes: () => dispatch(fetchNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);