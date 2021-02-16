import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

class DeleteNBModal extends React.Component{
  constructor(props) {
    super(props) 

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteNotebook({id: this.props.notebookId}).then(() => this.props.closeModal());
  }

  render() {
    return (
      <div className='delete-nb-wrapper'>
        <div className='delete-nb-texts'>
          <h1>Delete notebook?
            <i onClick={() => this.props.closeModal()} className="fas fa-times"></i>
          </h1>
          <h2>Any notes in the notebook will be delete. This cannot be undone.</h2>
        </div>
        <div className='delete-nb-btns'>
          <button className='delete-nb-cancel'
            onClick={() => this.props.closeModal()} > Cancel </button>
          <button type='submit' className='delete-nb-delete'
                  onClick={this.handleClick}>
                  Delete
          </button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    notebookId: state.ui.modal.notebookId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteNotebook: (notebook) => dispatch(deleteNotebook(notebook)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteNBModal)