import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
// import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/session_form/login_form_container';
import SignupFormContainer from './session/session_form/signup_form_container';
import {ProtectedRoute, AuthRoute} from '../util/route_util';
import NavBarContainer from './splash/navbar/navbar_container';
import SideBarContainer from './home/sidebar/sidebar_container';

import ErrorPage from './errorPage/error_page';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={NavBarContainer}/>
      <ProtectedRoute exact path='/home' component={SideBarContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/404" component={ErrorPage} />
      <Redirect to='/404' />
    </Switch>
  )
}

export default App;