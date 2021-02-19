import React from 'react';


class NoteEdit extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      id: null,
      title: '',
      body: '',
      updated_at: new Date()
    }

    this.saveState = this.saveState.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (this.state.id === null || this.props.match.params.noteId !== prevProps.match.params.noteId) {
      {this.saveState();}
    }
  }

  saveState() {
    if(this.props.notes) {
      this.setState(this.props.notes[this.props.noteId])
    }
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value})
  }

  render() {
    if(!this.state.id) {return null;}

    return (
      <div className='note-edit-container'>
        {/* <input onChange={this.handleChange('title')} type='text' value={this.state.title}/>
        <input onChange={this.handleChange('body')} type='body' value={this.state.body} /> */}
        <h1>{this.state.title}</h1>
        <h2>{this.state.body}</h2>
      </div>
    )
  }
}

export default NoteEdit;