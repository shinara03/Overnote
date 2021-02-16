import {connect} from 'react-redux';
import {makeNotebooksArr} from '../../../reducers/notebook/selector';
import NoteIndex from './note_index';
import {fetchNotes} from '../../../actions/note_actions';


const mapStateToProps = state => {
  return {
    notes: makeNotebooksArr(state.entities),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteIndex);