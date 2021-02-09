import React from 'react';
import { Route } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
const App = () => {
  return (
    <div>
      {/* <h1>From App</h1> */}
      {/* <GreetingContainer /> */}
      <Route exact path="/user" component={GreetingContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
    </div>
  )
}

export default App;