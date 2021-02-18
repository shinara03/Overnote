import React from 'react';
import SideBarContainer from '../sidebar/sidebar_container';
import {formatDate} from '../../../util/date_util';
import NoteShowContainer from '../notes/note_show_container';

class NotebookShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // currentNoteId : null
      currentNote: null
    }

    // this.setCurrentNote = this.setCurrentNote.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes();
    this.props.fetchNotebook(this.props.notebookId);
  }

  setCurrentNote(note) {
    this.setState({currentNote: note});
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
                <li onClick={() => this.setCurrentNote(note)} 
                    key={note.id} className='notes-index-items'>
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
            <NoteShowContainer note={this.state.currentNote}/>
          </div>
        </div>
      </div>
    )
  }
}


export default NotebookShow;