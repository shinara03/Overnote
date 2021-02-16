import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import {fetchNotebooks} from '../../../actions/notebook_actions';
import {makeNotebooksArr} from '../../../reducers/notebook/selector';
import {openModal} from '../../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    notebooks: makeNotebooksArr(state.entities),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllNotebooks: () => dispatch(fetchNotebooks()),
    openModal: (modal, notebookId) => dispatch(openModal(modal, notebookId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NotebookIndex);