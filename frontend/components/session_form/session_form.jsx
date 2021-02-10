import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import DemoUserContainer from '../demoUser/demoUser_container'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  render() {

    let footer;
    if (this.props.formType === 'login') {
      footer = <div> 
        <p>Don't have an account?</p>
        <Link className='account-link' to='/signup'>Create account</Link>
      </div>
    } else {
      footer = <div>
        <span>By creating an account, you are agreeing to our Terms of Service and Privacy Policy</span>
        <p>Already have an account?</p>
        <Link className='account-link' to='/login'>Sign in</Link>
      </div>
    }

    return (
      <div className='session-page'>
        <div className='session-wrapper'>
          <div className='session-heading'>
            <img src={window.octopusURL} />
            <h1>Overnote</h1>
            <h2>Remember everything important</h2>
            <DemoUserContainer />
            <h3 className='horizontal-line'><span>or</span></h3>
          </div>
          <form className='session-form' onSubmit={this.handleSubmit}>
            <div>
                <input className="session-inputs" type="text" 
                      value={this.state.email} 
                      placeholder="Email address"
                      onChange={this.update('email')} />
              <br/>
                <input className='session-inputs' type="text" 
                      value={this.state.password} 
                      placeholder="Password"
                      onChange={this.update('password')} />
              <br/>
              <input className='session-button' type='submit' value="Continue" />
            </div>
          </form>
          <div className= 'session-footer'>
            {footer}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SessionForm);