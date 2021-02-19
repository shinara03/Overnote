import React from 'react';
import SideBarContainer from '../sidebar/sidebar_container';
import {formatDate} from '../../../util/date_util';
import NoteShowContainer from '../notes/note_show_container';
import {Link} from 'react-router-dom';

class NotebookShow extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   currentNote: null
    // }
  }

  componentDidMount() {
    this.props.fetchNotes();
    this.props.fetchNotebook(this.props.notebookId);
  }

  setCurrentNote(note) {
    this.setState({hasNote: true, currentNote: note});
  }
  
  render() {

    if(!this.props.notes) {return null;}

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
                // <li key={note.id} className='notes-index-items'>
                //   <div className='notes-content'>
                //     <div>
                //       <h1>{note.title}</h1>
                //       <h2>{note.body}</h2>
                //     </div>
                //     <h3>{formatDate(note.updatedAt)}</h3>
                //   </div>
                // </li>
                <Link key={note.id} 
                    className='note-show-link' to={`/notebooks/${this.props.notebookId}/${note.id}`}>
                  <div className='notes-content'>
                       <div>
                         <h1>{note.title}</h1>
                         <h2>{note.body}</h2>
                       </div>
                       <h3>{formatDate(note.updatedAt)}</h3>
                     </div>
                </Link>
              )
            })}
          </div>
          {/* <div className='note-edit'> */}
            {/* <NoteShowContainer note={this.state.currentNote}/> */}
          {/* </div> */}
        </div>
      </div>
    )
  }
}


export default NotebookShow;