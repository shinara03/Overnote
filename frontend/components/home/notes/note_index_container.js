import {connect} from 'react-redux';
import {makeNoteArr} from '../../../reducers/note/note_selector';
import NoteIndex from './note_index';
import {fetchNotes} from '../../../actions/note_actions';


const mapStateToProps = state => {
  return {
    notes: makeNoteArr(state.entities),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteIndex);