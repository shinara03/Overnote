import React from 'react';
import { Route } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {ProtectedRoute, AuthRoute} from '../util/route_util'
import Navbar_container from './navbar/navbar_container';
const App = () => {
  return (
    <div>
      {/* <h1>From App</h1> 
      <h3>from app</h3> */}
      {/* <GreetingContainer /> */}
      <Route exact path='/' component={Navbar_container}/>
      <Route exact path="/home" component={GreetingContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
  )
}

export default App;