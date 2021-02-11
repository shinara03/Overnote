import React from 'react';
import { Route, Switch} from 'react-router-dom'
// import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {ProtectedRoute, AuthRoute} from '../util/route_util'
import NavBar from './navbar/navbar';
import SideBarContainer from './sidebar/sidebar_container';
import ErrorPage from './errorPage/error_page';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={NavBar}/>
      <ProtectedRoute exact path='/home' component={SideBarContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route component={ErrorPage} />
    </Switch>
  )
}

export default App;