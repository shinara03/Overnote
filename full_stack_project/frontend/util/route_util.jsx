// import React from 'react';
// import { connect } from 'react-redux';
// import { Redirect, Route, withRouter } from 'react-router-dom';

// const mapStateToProps = state => {
//   return {
//     loggedIn: Boolean(state.session.id)
//   }
// }

// //can't access login/signup page if logged in
// const Auth = ({ loggedIn, exact, path, component: Component}) => {
//   return (
//     <Route path={path}
//            exact={exact}
//            render={props => (
//              loggedIn ? <Redirect to='/user' /> : <Component {...props}/>
//            )}
//      />
//   ) 
// }

// const Protected = ({ loggedIn, exact, path, component: Component}) => {
//   return (
//     <Route path={path}
//            exact={exact}
//            render={props => (
//              loggedIn ? <Component {...props}/> : <Redirect to='/login' />
//            )}
//     />
//   )
// }

