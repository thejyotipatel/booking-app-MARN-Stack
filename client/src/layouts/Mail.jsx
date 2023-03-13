import React from 'react'

const Mail = () => {
  return (
    <div className='mail container'>
      <h2 className='mail-title'>Save time, save money!</h2>
      <p className='mail-desc'>Signup and we'll send the best deals to you</p>
      <div className='mail-input'>
        <input type='text' placeholder='Your mail' />
        <button className='btn'>Subscribe</button>
      </div>
    </div>
  )
}

export default Mail
