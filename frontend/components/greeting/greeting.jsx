import React from 'react';
// import { Link } from 'react-router-dom';

const Greeting = (props) => {
  return (
      <div className='sidebar-user'>
          <button className='drop-btn'>
            <img className='sidebar-icon' src={window.sidebarIconURL} />
            <h2>{props.currentUser.email}</h2>
            <i className='arrow'></i>
          </button>
        <div id='sb-dropdown' className='dropdown-content'>
            <button className='logout-btn' onClick={props.logout}>Sign out {props.currentUser.email}</button>
        </div>
        {/* <button onClick={props.logout}>Sign out</button> */}
      </div>
  )
}

export default Greeting