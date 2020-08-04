import React from 'react'
import devImg from '../images/mockup.png'

const Home = () => {
  return (
    <div className='home-title'>
      <h1>Vianney Bouault</h1>
      <h3>Développeur web</h3>
      <img src={devImg} alt='mockup code' className='mockup'/>
    </div>
  )
}

export default Home
