import React from 'react';

class NotebookIndex extends React.Component {
  
  componentDidMount() {
    this.props.getAllNotebooks();
  }

  render() {
  
    return (
      <div className='notebook-list'>
        {this.props.notebooks.map(notebook => {
          return <li key={notebook.id}>{notebook.notebook_name}</li>
        })}
      </div>
    ) 
  }
}

export default NotebookIndex;