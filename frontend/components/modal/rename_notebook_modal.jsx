import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { clearNBErrors, receiveNotebookErrors, updateNotebook } from '../../actions/notebook_actions';

class RenameNBModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.notebookId,
      notebook_name: "",
      author_id: this.props.author_id
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => this.setState({ notebook_name: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const {notebooks, notebookId} = this.props
    if (notebooks[notebookId].notebook_name === this.state.notebook_name)
    {
      this.props.receiveNotebookErrors(["Notebook name hasn't changed"]);
    } else {
      const notebook = Object.assign({}, this.state);
      this.props.updateNotebook(notebook).then(() => this.props.closeModal());
    }
  }

  render() {
    return (

    <div className='rename-nb-wrapper'>
      <h1>Rename notebook
        <i onClick={() => {
          this.props.closeModal()
          this.props.clearErrors()
        }}
          className="fas fa-times"></i>
      </h1>
      <form onSubmit={this.handleSubmit}>
        <label className='rename-nb-label'>Name
            <input type="text" placeholder="Notebook name"
            value={this.state.notebook_name}
            onChange={this.update()} />
        </label>
        <div className='rename-nb-error'>
          {this.props.updateErrors.map((error, index)=> {
            return <li key={index}>{error}</li>
          })}
        </div>
        <div className='rename-nb-btns'>
          <button className='rename-nb-cancel'
            onClick={() => {
              this.props.closeModal()
              this.props.clearErrors()
            }} > Cancel
            </button>
          <button type='submit' className='rename-nb-continue'>Continue</button>
        </div>
      </form>
    </div>
    )}
  }

const mapStateToProps = state => {
  return {
    author_id: state.session.id,
    updateErrors: state.errors.notebook,
    notebookId: state.ui.modal.notebookId,
    notebooks: state.entities.notebooks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearNBErrors()),
    receiveNotebookErrors: (errors) => dispatch(receiveNotebookErrors(errors))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RenameNBModal)