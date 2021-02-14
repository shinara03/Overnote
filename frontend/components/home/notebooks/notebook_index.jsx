import React, { useReducer } from 'react';
import SideBarContainer from '../sidebar/sidebar_container';
import {formatDate} from '../../../util/date_util';

class NotebookIndex extends React.Component {
  
  componentDidMount() {
    this.props.getAllNotebooks();
  }

  render() {
  
    return (
      <div className="nb-container">
        <SideBarContainer/>
        <div className='notebook-list'>
          <h1>Notebooks</h1>
          <h2>My notebook list </h2>
          <button className='new-notebook-btn'>
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
              return (
                <ul>
                  <li className='notebook-title' key={notebook.id}>
                    <p><i class="fas fa-caret-right"></i></p>
                    <p><i class="fas fa-book"></i></p>
                    <p>{notebook.notebook_name}</p>
                  </li>
                  <li>{formatDate(notebook.created_at)}</li>
                  <li>{formatDate(notebook.updated_at)}</li>
                  <i className="fas fa-ellipsis-h"></i>
                </ul>
              )
            })}
          </div>
        </div>
      </div>
    ) 
  }
}

export default NotebookIndex;