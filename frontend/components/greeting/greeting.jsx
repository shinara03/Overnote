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



//   < div class="dropdown" >
//        <button onclick="myFunction()" class="dropbtn">Dropdown</button>
//        <div id="myDropdown" class="dropdown-content">
//            <a href="#">Link 1</a>
//             <a href="#">Link 2</a>
//             <a href="#">Link 3</a>
//        </div>
// </div >