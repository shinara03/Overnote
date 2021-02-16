import React from 'react';
import Greeting from '../greeting/greeting';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
  return (
    <div className='sidebar'>
      <Greeting currentUser={props.currentUser} logout={props.logout} />
      <div className='sidebar-lists'>
        <div className='sidebar-home'>
          <Link className='sidebar-home-link' to='/home'>
            <i className="fas fa-home"></i>
            Home
          </Link>
        </div>
        <div className='sidebar-notebooks'>
          <i className="fas fa-caret-right"></i>
          <Link className='sidebar-nb-link' to='/home/notebooks'>
            <i className="fas fa-book"></i>
            Notebooks
          </Link>
        </div>
      </div>

    </div>
  ) 
}

export default SideBar;