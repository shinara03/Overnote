import React from 'react';

class NoteShow extends React.Component {
  render() {

    if(this.props.note === null) { 
      return null
    }

    return (
      <>
        <div className='note-edit'>
         {this.props.note.title}
        </div>
      </>
    )
  }
}

export default NoteShow;