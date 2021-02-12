import React from 'react';
import NavBarContainer from '../splash/navbar/navbar_container'

const ErrorPage = () => {
  return (
    <div>
      <NavBarContainer />
      <div className='epage-wrapper'>
        <img className='epage-img' src={window.errorPage} />
      </div>
    </div>
  )
}

export default ErrorPage;