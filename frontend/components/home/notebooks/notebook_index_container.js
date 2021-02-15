import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import {fetchNotebook, fetchNotebooks, createNotebook,
      updateNotebook, deleteNotebook } from '../../../actions/notebook_actions';
import {makeNotebooksArr} from '../../../reducers/notebook/selector';
import {openModal} from '../../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    notebooks: makeNotebooksArr(state.entities)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllNotebooks: () => dispatch(fetchNotebooks()),
    getOneNotebook: id => disapatch(fetchNotebook(id)),
    makeNotebook: notebook => dispatch(createNotebook(notebook)),
    editNotebook: notebook => dispatch(updateNotebook(notebook)),
    deleteNotebook: notebook => dispatch(deleteNotebook(notebook)),
    openModal: (modal, notebookId) => dispatch(openModal(modal, notebookId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NotebookIndex);