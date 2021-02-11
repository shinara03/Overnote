import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <div className='navBar'>
          <Link className='navBar-logo'to='/'>
            <img className='navBar-oct' src={window.octopusURL} />
            <h1>Overnote</h1>
          </Link>
        <div className='navBar-redirect'>
          <Link className='navBar-link' to='/login'>Log In</Link>
          <Link className='navBar-link' to='/signup'>Sign Up</Link>
        </div>
      </div>
    )
}
export default NavBar;