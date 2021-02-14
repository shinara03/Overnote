import React from 'react';
import SideBarContainer from '../sidebar/sidebar_container';

class NotebookIndex extends React.Component {
  
  componentDidMount() {
    this.props.getAllNotebooks();
  }

  render() {
  
    return (
      <div className="nb-container">
        <SideBarContainer/>
        <div className='notebook-list'>
          <div className='notebook-header'>
            <h1>Notebooks</h1>
            <p>My notebook list</p>
            <p>New Notebook</p>
          </div>
          <div className='notebook-body'> 
            <div className="notebook-body-header">
              <p>TITLE</p>
              <p>CREATED BY</p>
              <p>CREATED </p>
              <p>UPDATED</p>
              <p>ACTIONS</p>
            </div>
              {this.props.notebooks.map(notebook => {
                return (
                  <li key={notebook.id}>{notebook.notebook_name}</li>
                )          
              })}
          </div>
        </div>
      </div>
    ) 
  }
}

export default NotebookIndex;