import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let navLinks;
    
    //checking if user is logged in 
    if (props.currentUser) {
      navLinks = <>
        <Link className='navBar-link' to='/notebooks'>My Notes</Link>
      </>
    } else {
      navLinks = <> 
        <Link className='navBar-link' to='/login'>Log In</Link>
        <Link className='navBar-link' to='/signup'>Sign Up</Link>
      </>
    }


    return (
      <div className='navBar'>
          <Link className='navBar-logo'to='/'>
            <img className='navBar-oct' src={window.octopusURL} />
            <h1>Overnote</h1>
          </Link>
        <div className='navBar-redirect'>
          {navLinks}
        </div>
      </div>
    )
}
export default NavBar;