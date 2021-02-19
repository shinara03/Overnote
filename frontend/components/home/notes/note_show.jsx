import React from 'react';

// class NoteShow extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log('hi')
//     // this.state = {
//     //   id: this.props.note.id,
//     //   title: this.props.note.title,
//     //   body: this.props.note.body,
//     //   notebook_id: this.props.note.notebookId
//     // }

//     // this.state = {
//     //   id: this.props.note ? this.props.note.id : '',
//     //   title: this.props.note ? this.props.note.title : '',
//     //   body: this.props.note ? this.props.note.body : '',
//     //   notebook_id: this.props.note ? this.props.note.notebook_id : ''
//     // }

//     // this.state = {
//     //   id: '',
//     //   title: '',
//     //   body: '',
//     //   notebook_id: ''
//     // }
//     // this.handleChange =this.handleChange.bind(this)
//   }

//   handleChange(field) {
//     return e => this.setState({ [field]: e.currentTarget.value })
//   }

//   render() {

//     // if(this.props.note === null) { 
//     //   return null
//     // } 
//     debugger

//     return (
//         <div className='note-show-wrapper' >
//           {/* <input onChange={() => {this.handleChange}} type='text' value={this.props.note.title}/> */}
//           {/* <input onChange={this.handleChange('title')} type='text' value={this.state.title ? this.state.title : this.props.note.title}/>
//           <input onChange={this.handleChange('body')}type='text' value={this.state.body ? this.state.body : this.props.note.body} /> */}
//           <h1>hello</h1>
//         </div>
//     )


//   }
// }

class NoteShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.noteId,
      title: null,
      body: null,
      notebook_id: null
    };
  
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e) {
    return e => {
      if(this.state.title === null) {
        return this.setState({title: this.props.notes[this.props.noteId]})
      } else {
        return this.setState({title: title})
      }
    }
  }


  render() {
    const {notes, noteId} = this.props;
    let currentNote = notes[noteId];
    // debugger
    if (!notes || !noteId || !currentNote) {return null;}
    return (
      <div className='note-edit'>
        <input onChange={this.handleChange} type='text' value={this.state.title}/>
      </div>
    )
  }
}

export default NoteShow;