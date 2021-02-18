import React from 'react';
import SideBarContainer from '../sidebar/sidebar_container';
// import NotebookIndexListItem from './notebook_index_list_Items';
import { formatDate } from '../../../util/date_util';
import { Link } from 'react-router-dom';

class NotebookIndex extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      dropdown: {}
    }
  }

  componentDidMount() {
    this.props.getAllNotebooks();
  }

  toggleDropdown(notebookId) {
    if (this.state.dropdown[notebookId]) {
      this.setState({dropdown: {[notebookId]: false}})
    } else {
      this.setState({dropdown: {[notebookId]: true}})
    }
  }

  render() {
    return (
      <div className="nb-container">
        <SideBarContainer/>
        <div className='notebook-list'>
          <h1>Notebooks</h1>
          <h2>My notebook list </h2>
          <button onClick={() => this.props.openModal('new notebook')}
                  className='new-notebook-btn'>
            <i className="fas fa-plus"></i>
            <p>New Notebook</p>
          </button>
          <div className='notebook-header'>
            <h3>TITLE</h3>
            <h3>CREATED</h3>
            <h3>UPDATED</h3>
            <h3 className='notebook-action'>ACTIONS</h3>
          </div>
          <div className='notebook-body'>
            {this.props.notebooks.map(notebook => {
              let dropdownClass = this.state.dropdown[notebook.id] ? 
                                  'notebook-actions-dropdown' : 
                                  'notebook-actions';
              return (
                <ul key={notebook.id}>
                  <li className='notebook-title'>
                    {/* <p><i className="fas fa-caret-right"></i></p> */}
                    <p><i className="fas fa-book"></i></p>
                    <Link className='notebook-redirect' to={`/notebooks/${notebook.id}`}>
                      <p>{notebook.notebookName}</p>
                    </Link>
                  </li>
                  <li>{formatDate(notebook.createdAt)}</li>
                  <li>{formatDate(notebook.updatedAt)}</li>
                  <div className='notebook-dropdown'>
                    <div value={notebook.id} onClick={()=> this.toggleDropdown(notebook.id)}>
                      <i className="fas fa-ellipsis-h"> </i> 
                    </div>
                    <div className={dropdownClass}>
                      <button onClick={() => {
                        this.props.openModal('rename notebook', notebook.id)
                        this.toggleDropdown(notebook.id)
                      }}>
                        Rename notebook
                      </button>
                      <button onClick={() => {
                        this.props.openModal('delete notebook', notebook.id)
                        this.toggleDropdown(notebook.id)
                      }}>
                        Delete notebook
                      </button>
                    </div>
                  </div>
                </ul>
            )})}
          </div>
        </div>
      </div>
    ) 
  }
}

export default NotebookIndex;