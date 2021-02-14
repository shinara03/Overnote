import React from 'react';
import { connect } from 'react-redux';
import {closeModal} from '../../actions/modal_actions'
import {createNotebook} from '../../actions/notebook_actions';

class NewNotebookModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notebook_name: "",
      author_id: this.props.author_id
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => this.setState({notebook_name: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const newNotebook= Object.assign({}, this.state);
    this.props.createNotebook(newNotebook).then(() => this.props.closeModal());
  }

  render() {
    return (
      <div className='new-notebook-wrapper'>
        <div className='new-notebook-text'>
          <h1>Create new notebook
              <i onClick={this.props.closeModal} className="fas fa-times"></i>
          </h1>
          <h2>Notebooks are useful for grouping notes around a common topic.</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label className='new-notebook-label'>Name
            <input type="text" placeholder="Notebook name"
                  value={this.state.notebook_name}
                  onChange={this.update()}  />
          </label>
          <div className='new-notebook-btns'>
            <button className='new-notebook-cancel' onClick={this.props.closeModal}>Cancel</button>
            <button type='submit' className='new-notebook-continue'>Continue</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    author_id: state.session.id,
    createError: state.errors.notebook
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNotebookModal);