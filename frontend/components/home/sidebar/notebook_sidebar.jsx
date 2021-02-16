import React from 'react';
import {connect} from 'react-redux';
import {makeNotebooksArr} from '../../../reducers/notebook/selector';
import {fetchNotebooks} from '../../../actions/notebook_actions';

class NotebookSidebar extends React.Component {
  // componentDidMount() {
  //   this.props.getAllNotebooks();
  // }

  render() {
    return (
      <div>
        {this.props.notebooks.map((notebook,index) => {
          return (
            <li key={index}>
              <i className="fas fa-book"></i>
              {notebook.notebookName}
            </li>
          )
        })}
      </div>
    )
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