import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import LoginFormContainer from './session/session_form/login_form_container';
import SignupFormContainer from './session/session_form/signup_form_container';
import {ProtectedRoute, AuthRoute} from '../util/route_util';
import NavBarContainer from './splash/navbar/navbar_container';
// import SideBarContainer from './home/sidebar/sidebar_container';
import ErrorPage from './errorPage/error_page';
import NotebookIndexContainer from './home/notebooks/notebook_index_container';
import Modal from './modal/modal';
import HomePage from './home/homepage';

const App = () => {
  return (
    <>
      <Modal />
      <Switch>
        <Route exact path='/' component={NavBarContainer}/>
        {/* <ProtectedRoute exact path='/home' component={HomePage}/> */}
        <ProtectedRoute exact path='/notebooks' component={NotebookIndexContainer}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/404" component={ErrorPage} />
        <Redirect to='/404' />
      </Switch>
    </>
  )
}

export default App;