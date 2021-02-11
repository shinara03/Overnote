import React from 'react';
// import { Link } from 'react-router-dom';

const Greeting = (props) => {
  // const welcomeMessage = () => {
  //   return (
  //     <div>
  //       <h2>welcome, {props.currentUser.email}</h2>
  //       <button onClick={props.logout}>Sign out</button>
  //     </div>
  //   )
  // }

  // const links = () => {
  //   return (
  //     <div>
  //       <Link to='/login'>Log in</Link>
  //       <br />
  //       <Link to='/signup'>Create Account</Link>
  //     </div>
  //   )
  // }

  // return props.currentUser ? welcomeMessage() : links();
  return (
      <div className='sidebar-user'>
        <img className='sidebar-icon' src={window.sidebarIconURL} />
        <h2>{props.currentUser.email}</h2>
        <i className='arrow'></i>
        {/* <button onClick={props.logout}>Sign out</button> */}
      </div>
  )
}

export default Greeting