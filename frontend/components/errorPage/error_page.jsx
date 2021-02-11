import React from 'react';
import NavBar from '../navbar/navbar'

const ErrorPage = () => {
  return (
    <div>
      <NavBar />
      <div className='epage-wrapper'>
        <img className='epage-img' src={window.errorPage} />
      </div>
    </div>
  )
}

export default ErrorPage;