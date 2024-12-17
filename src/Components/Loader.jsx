import React from 'react'
import loaderAnimation from '../Components/Assets/Storm.gif'
import '../styles/components/Loader.scss';

const Loading = () => {
  return (
    <div className='load fade-in'>
   <img src={loaderAnimation} alt="loading"/>
   </div>
  )
}

export default Loading
