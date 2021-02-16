import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  }
}

//can't access login/signup page if logged in
const Auth = ({ loggedIn, exact, path, component: Component}) => {
  return (
    <Route path={path}
           exact={exact}
           render={props => (
             loggedIn ? <Redirect to='/notebooks' /> : <Component {...props}/>
           )}
     />
  ) 
}

//can't access / page when a user is not logged in
const Protected = ({ loggedIn, exact, path, component: Component}) => {
  return (
    <Route path={path}
           exact={exact}
           render={props => (
             loggedIn ? <Component {...props}/> : <Redirect to='/' />
           )}
    />
  )
}

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

