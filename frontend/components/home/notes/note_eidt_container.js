import { connect } from 'react-redux';
import NoteEdit from './note_edit';
import {} from '../../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    noteId: parseInt(ownProps.match.params.noteId),
    notes: state.entities.notes

  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteEdit);