import React from 'react';
import SideBarContainer from '../sidebar/sidebar_container';

class NotebookShow extends React.Component {
  componentDidMount() {
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
        </div>
      </div>
    )
  }
}


export default NotebookShow;