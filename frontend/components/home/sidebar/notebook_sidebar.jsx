import React from 'react';
import {connect} from 'react-redux';
import {makeNotebooksArr} from '../../../reducers/notebook/selector';
import {fetchNotebooks} from '../../../actions/notebook_actions';
import { Link } from 'react-router-dom';
import { fetchNotes } from '../../../actions/note_actions';

class NotebookSidebar extends React.Component {
  componentDidMount() {
    this.props.getAllNotebooks();
  }

  render() {
    return (
      <div>
        {this.props.notebooks.map((notebook,index) => {
          return (
            <Link className='sidebar-nb-show-link' to={`/notebooks/${notebook.id}`} key={index}>
              <div>
                <i className="fas fa-book"></i>
                {notebook.notebookName}
              </div>
            </Link>
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
    getAllNotebooks: () => dispatch(fetchNotebooks()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookSidebar);