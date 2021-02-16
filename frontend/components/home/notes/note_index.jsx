import React from 'react';
import SideBarContainer from '../sidebar/sidebar_container';

class NoteIndex extends React.Component {
  render() {
    return (
      <div className='notes-container'>
        <SideBarContainer/>
        <div className='notes-list'>
          hello
        </div>
      </div>
    )
  }
}

export default NoteIndex;