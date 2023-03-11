import React from 'react'

const Mail = () => {
  return (
    <div className='mail'>
      <h1 className='mail-title'>Save tim,save mony!</h1>
      <p className='mail-desc'>Signup and we'll send the bestdeals to you</p>
      <div className='mail-input'>
        <input type='text' placeholder='Your mail' />
        <button className='btn'>Subscribe</button>
      </div>
    </div>
  )
}

export default Mail
