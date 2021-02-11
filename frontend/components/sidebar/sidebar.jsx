import React from 'react';
import Greeting from '../greeting/greeting';

const SideBar = (props) => {
  return (
    <div className='sidebar'>
      <Greeting currentUser={props.currentUser} logout={props.logout} />
    </div>
  ) 
}

export default SideBar;