import { connect } from 'react-redux';
import { fetchNotes } from '../../../actions/note_actions';
import NoteShow from './note_show';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const noteId = parseInt(ownProps.match.params.noteId)
  const notes = state.entities.notes

  return {
    noteId,
    notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow)