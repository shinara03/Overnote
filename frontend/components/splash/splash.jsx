import React from 'react';
import NavBarContainer from './navbar/navbar_container'

const Splash = () => {
  return (
    <div className='splash-wrapper'>
      <NavBarContainer/>
      <div className='splash-text-wrapper'>
        <div className='splash-text'>
          <h1>Accomplish more with better notes</h1>
          <h2>Overnote helps you capture ideas and find them fast</h2>
        </div>
        <div className='splash-text2'>
          <img className='splash-img' src={window.homePageURL} />
          <h2>
            Take notes anywhere. Express yourself with formatting tools that
            help you write how you think. Keep important info handy with Overnote
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Splash;