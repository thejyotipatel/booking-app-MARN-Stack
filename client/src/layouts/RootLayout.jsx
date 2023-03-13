import { Outlet, NavLink } from 'react-router-dom'
import Footer from './Footer'

export default function RootLayout() {
  return (
    <>
      <div className='main-header'>
        <div className='navbar container'>
          <NavLink className='logo' to='/'>
            Booking.red
          </NavLink>
          <nav>
            <NavLink to='register' className=''>
              Register
            </NavLink>
            <NavLink to='signin' className=''>
              Sign In
            </NavLink>
          </nav>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}
