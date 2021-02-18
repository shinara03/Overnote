import { connect } from 'react-redux';
import NoteShow from './note_show';

const mapStateToProps = state => {
  // debugger
  return {
    //  notes: state.entities.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow)