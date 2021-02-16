import React from 'react';
import {connect} from 'react-redux';

class NotebookSidebar extends React.Component {
  componentDidMount() {
    this.props.getAllNotebooks();
  }

  render() {
    <div>
      {this.props.notebooks.map(notebook => {
        return <liv>{notebook.notebookName}</liv>
      })}
    </div>
  }

}



const mapStateToProps = state => {
  return {
    notebooks: makeNotebooksArr(state.entities)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllNotebooks: () => dispatch(fetchNotebooks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookSidebar);