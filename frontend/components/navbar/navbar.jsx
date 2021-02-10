import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    return (
      <div className='navBar'>
        <div className='navBar-logo'>
          <img className='navBar-oct' src={window.octopusURL} />
          <h1>Overnote</h1>
        </div>
        <div className='navBar-redirect'>
          <Link className='navBar-link' to='/login'>Log In</Link>
          <Link className='navBar-link' to='/signup'>Sign Up</Link>
        </div>
      </div>
    )
  }
}
export default NavBar;