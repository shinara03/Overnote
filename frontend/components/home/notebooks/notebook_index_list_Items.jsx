import React from 'react';
import { formatDate } from '../../../util/date_util';

class NotebookIndexListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdown: {}
    };

    // this.toggleDropdown = this.toggleDropdown.bind(this);
  }


  // toggleDropdown() {
  //   if (this.state.dropdown[notebook_id] === false){
  //     this.setState({ dropdown: { [notebook.id]: true } })
  //   } else {
  //     this.setState({ dropdown: { [notebook.id]: false } })
  //   }
  // }

  render() {
    const {notebook} = this.props;
    const {dropdown} = this.state;

    return (
      <ul>
        <li className='notebook-title'>
          <p><i className="fas fa-caret-right"></i></p>
          <p><i className="fas fa-book"></i></p>
          <p>{notebook.notebook_name}</p>
        </li>
        <li>{formatDate(notebook.created_at)}</li>
        <li>{formatDate(notebook.updated_at)}</li>
        <div className='notebook-dropdown'>
          <i className="fas fa-ellipsis-h"> </i>
          <div className={`notebook-actions ${dropdown.notebook_id ? 'dropdown' : ''}`}>
            <button onClick={() => this.props.openModal('rename notebook', notebook.id)}>
              Rename notebook
            </button>
            <button onClick={() => this.props.openModal('delete notebook', notebook.id)}>
              Delete notebook
            </button>
          </div>
        </div>
      </ul>
    )
  }
}

export default NotebookIndexListItem;