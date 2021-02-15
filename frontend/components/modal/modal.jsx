import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NewNotebookModal from './new_notebook_modal';
import RenameNBModal from './rename_notebook_modal';
import DeleteNBModal from './delete_notebook_modal';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'new notebook':
      component = <NewNotebookModal />;
      break;
    case 'rename notebook':
      component = <RenameNBModal />;
      break;
    case 'delete notebook':
      component = <DeleteNBModal />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
