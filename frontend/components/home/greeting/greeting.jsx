import React from 'react';
// import { Link } from 'react-router-dom';


const Greeting = (props) => {
  return (
      <div className='sidebar-user'>
        <div className='user-info'>
            <i className="fas fa-user-circle"></i>
            <h2>{props.currentUser.email}</h2>
        </div>
        <button className='LOdropdown-open' onClick={props.logout}>
          Sign out 
        </button>
      </div>
  )  
}
  

export default Greeting;