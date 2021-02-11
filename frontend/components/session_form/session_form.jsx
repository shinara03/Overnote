import React from 'react';
import { withRouter} from 'react-router-dom';
import DemoUserContainer from '../demoUser/demoUser_container'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderError = this.renderError.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/home'));
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  getFooter() {
    let footer
    if (this.props.formType === 'login') {
      footer = <div>
        <p>Don't have an account?</p>
        <h3 className='account-link' onClick={() => {
          this.props.clearErrors();
          this.props.history.push('/signup')
        }}>Create account</h3>
      </div>
    } else {
      footer = <div>
        <span>By creating an account, you are agreeing to our Terms of Service and Privacy Policy</span>
        <p>Already have an account?</p>
        <h3 className='account-link' onClick={() => {
          this.props.clearErrors();
          this.props.history.push('/login')
        }}>Sign in</h3>
      </div>
    }
    return footer;
  }

  renderError() {
    let errors = this.props.errors.map((error,idx) => {
      return <p key={idx} className='session-errors'>{error}</p> 
    })

    return errors;
  }

  render() {
    // let emailError;
    // let passwordError;
    // let combiError;

    // this.props.errors.map(error => {
    //   if (error === "Invalid email or password") {
    //     combiError = error;
    //   } else if (error.toLowerCase().includes('email')) {
    //     emailError = error;
    //   } else {
    //     passwordError = error;
    //   }
    // })
   

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
                {/* <div className="session-errors">{emailError}</div> */}
                <input className='session-inputs' type="text" 
                      value={this.state.password} 
                      placeholder="Password"
                      onChange={this.update('password')} />
              <br/>
              {/* <div className="session-errors">{passwordError}</div>
              <div className="session-errors">{combiError}</div> */}
              {this.renderError()}
              <input className='session-button' type='submit' value="Continue" />
            </div>
          </form>
          <div className= 'session-footer'>
            {this.getFooter()}
          </div>
        </div>
        <div className='session-terms'>Terms of Service | Privacy Policy | 
                      Copyright 2021 Lena Shin. All rights reserved.</div>
      </div>
    )
  }
}

export default withRouter(SessionForm);