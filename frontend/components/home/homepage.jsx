import React from 'react';
import SideBarContainer from './sidebar/sidebar_container';

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <SideBarContainer />
      <div className='homepage-content'>OVERNOTE HOMEPAGE</div>
    </div>
  )
}

export default HomePage;