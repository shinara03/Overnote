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
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <h1>Evernote</h1>
          <h2>Remember everything important</h2> */}
          <div>
            <label>Email address
              <input type="text" value={this.state.email} onChange={this.update('email')} />
            </label>
            <br/>
            <label>Password
              <input type="text" value={this.state.password} onChange={this.update('password')} />
            </label>
            <input type='submit' value={this.props.formType} />
          </div>
        </form>
      </div>
    )
  }
}

export default SessionForm;