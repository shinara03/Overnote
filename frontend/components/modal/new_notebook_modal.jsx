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
  }

  render() {
    return (
      <div>
        <h1>Create new notebook</h1>
        <h2>Notebooks are useful for grouping notes around a common topic</h2>
        <label>Name
          <input type="text" placeholder="Notebook name" />
        </label>
        <button onClick={this.props.closeModal}>Cancel</button>
        <button>continue</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    author_id: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNotebookModal);