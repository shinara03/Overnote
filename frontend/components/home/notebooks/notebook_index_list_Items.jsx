// import React from 'react';
// import { formatDate } from '../../../util/date_util';

// class NotebookIndexListItem extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       dropdown: false
//     };

//     this.toggleDropdown = this.toggleDropdown.bind(this);
//   }


//   toggleDropdown(e) {
//     if (!this.state.dropdown){
//       this.setState({ dropdown: true })
//     } else {
//       this.setState({ dropdown: false })
//     }
//   }

//   render() {
//     const {notebook} = this.props;
//     const {dropdown} = this.state;
//     let dropdownClass = dropdown ? 'notebook-actions-dropdown' : 'notebook-actions';
//     console.log(this.props.banana);

//     return (
//       <ul>
//         <li className='notebook-title'>
//           {/* <p><i className="fas fa-caret-right"></i></p> */}
//           <p><i className="fas fa-book"></i></p>
//           <p>{notebook.notebookName}</p>
//         </li>
//         <li>{formatDate(notebook.createdAt)}</li>
//         <li>{formatDate(notebook.updatedAt)}</li>
//         <div className='notebook-dropdown'>
//           <div value={notebook.id} onClick={this.toggleDropdown}><i className="fas fa-ellipsis-h"> </i> </div>
//           <div className={dropdownClass}>
//             <button onClick={() => { this.props.openModal('rename notebook', notebook.id)
//                                      this.toggleDropdown()}}>
//               Rename notebook
//             </button>
//             <button onClick={() => { this.props.openModal('delete notebook', notebook.id)
//                                      this.toggleDropdown()}}>
//               Delete notebook
//             </button>
//           </div>
//         </div>
//       </ul>
//     )
//   }
// }

// export default NotebookIndexListItem;