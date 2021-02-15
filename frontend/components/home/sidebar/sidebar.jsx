import React from 'react';
import Greeting from '../greeting/greeting';

const SideBar = (props) => {
  return (
    <div className='sidebar'>
      <Greeting currentUser={props.currentUser} logout={props.logout} />
      <div className='sidebar-notebooks'>
        <p><i className="fas fa-caret-right"></i></p>
        <p><i className="fas fa-book"></i></p>
        <p>Notebooks</p>
      </div>
    </div>
  ) 
}

export default SideBar;