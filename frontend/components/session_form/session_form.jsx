import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user).then(() => this.props.history);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }


  render() {
    return (
      <div className='session-page'>
        <div className='session-wrapper'>
          <div className='session-heading'>
          <h1>Evernote</h1>
          <p className='tagline'>Remember everything important</p>
          </div>
          <form className='session-form' onSubmit={this.handleSubmit}>
            <div className='session-form-inputs'>
                <input type="text" 
                      value={this.state.email} 
                      placeholder="Email address"
                      onChange={this.update('email')} />
              <br/>
                <input type="text" 
                      value={this.state.password} 
                      placeholder="Password"
                      onChange={this.update('password')} />
              <br/>
              <input type='submit' value={this.props.formType} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SessionForm;