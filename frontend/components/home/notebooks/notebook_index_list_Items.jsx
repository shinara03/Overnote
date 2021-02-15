import React from 'react';
import { formatDate } from '../../../util/date_util';

class NotebookIndexListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdown: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }


  toggleDropdown(e) {
   this.setState({dropdown: !this.state.dropdown})
  }

  render() {
    const {notebook} = this.props;
    const {dropdown} = this.state;

    return (
      <ul key={notebook.id}>
        <li className='notebook-title'>
          <p><i className="fas fa-caret-right"></i></p>
          <p><i className="fas fa-book"></i></p>
          <p>{notebook.notebook_name}</p>
        </li>
        <li>{formatDate(notebook.created_at)}</li>
        <li>{formatDate(notebook.updated_at)}</li>
        <div className='notebook-dropdown'>
          {/* <i onClick={this.toggleDropdown} className="fas fa-ellipsis-h"> </i>
          <div className={`notebook-actions ${dropdown ? 'dropdown' : ''}`}>
            <button>Rename notebook</button>
            <button>Delete notebook</button>
          </div> */}
          <button onClick={() => this.props.openModal('rename notebook', notebook.id)}>
            Rename notebook
          </button>
          <button onClick={() => this.props.openModal('delete notebook')}>
            Delete notebook
          </button>
        </div>
      </ul>
    )
  }
}

export default NotebookIndexListItem;