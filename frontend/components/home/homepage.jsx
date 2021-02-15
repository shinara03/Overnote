import React from 'react';
import SideBarContainer from './sidebar/sidebar_container';

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <SideBarContainer />
      <div className='homepage-content'>hello</div>
    </div>
  )
}

export default HomePage;