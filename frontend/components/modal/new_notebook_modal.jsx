import React from 'react';
import { connect } from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import {clearNBErrors, createNotebook} from '../../actions/notebook_actions';

class NewNotebookModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notebook_name: "",
      author_id: this.props.authorId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => this.setState({notebook_name: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const newNotebook= Object.assign({}, this.state);
    this.props.createNotebook(newNotebook).then(() => this.props.closeModal());
  }

  render() {
    return (
      <div className='new-notebook-wrapper'>
        <div className='new-notebook-text'>
          <h1>Create new notebook
              <i onClick={() => { 
                this.props.closeModal()
                this.props.clearErrors()}} 
                className="fas fa-times"></i>
          </h1>
          <h2>Notebooks are useful for grouping notes around a common topic.</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label className='new-notebook-label'>Name
            <input type="text" placeholder="Notebook name"
                  value={this.state.notebook_name}
                  onChange={this.update()}  />
          </label>
          <div className='new-notebook-error'>{this.props.createError[0]}</div>
          <div className='new-notebook-btns'>
            <button className='new-notebook-cancel' 
                    onClick={() => {
                            this.props.closeModal()
                            this.props.clearErrors()
                    }} > Cancel
            </button>
            <button type='submit' className='new-notebook-continue'>Continue</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authorId: state.session.id,
    createError: state.errors.notebook
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearNBErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNotebookModal);