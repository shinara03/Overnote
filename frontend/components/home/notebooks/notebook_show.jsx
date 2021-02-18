import React from 'react';
import SideBarContainer from '../sidebar/sidebar_container';
import {formatDate} from '../../../util/date_util';

class NotebookShow extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
    this.props.fetchNotebook(this.props.notebookId);
  }
  
  render() {

    return (
      <div className="nb-show-container">
        <SideBarContainer />
        <div className='nb-show-list'>
          <div className='nb-show-header'>
            <h1>{this.props.notebook.notebookName}</h1>
            <h2>{this.props.notes.length} notes</h2>
          </div>
          <div className='notes-index'>
            {this.props.notes.map(note => {
              return (
                <li key={note.id} className='notes-index-items'>
                  <div className='notes-content'>
                    <div>
                      <h1>{note.title}</h1>
                      <h2>{note.body}</h2>
                    </div>
                    <h3>{formatDate(note.updatedAt)}</h3>
                  </div>
                </li>
              )
            })}
          </div>
          <div>
            
          </div>
        </div>
      </div>
    )
  }
}


export default NotebookShow;