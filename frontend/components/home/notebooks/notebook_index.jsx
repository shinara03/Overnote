import React from 'react';
import SideBarContainer from '../sidebar/sidebar_container';
import NotebookIndexListItem from './notebook_index_list_Items';

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
              return (
                <NotebookIndexListItem notebook={notebook} openModal={this.props.openModal}  />
              )
            })}
          </div>
        </div>
      </div>
    ) 
  }
}

export default NotebookIndex;