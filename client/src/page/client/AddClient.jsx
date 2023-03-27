import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'

const AddClient = () => {
  return (
    <div>
      <h1>Add client</h1>
      <div className=''>
        <Link to={'/add-Client'}>Profile</Link>
        <br />
        <Link to='payment'>payment</Link>
        <br />
        <Link to='modules'>modules</Link>
        <br />
        <Link to='theme'>theme</Link>
        <br />
        <Link to='success'>success</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default AddClient
