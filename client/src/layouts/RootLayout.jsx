import { Outlet, NavLink } from 'react-router-dom'
import Footer from './Footer'
import Mail from './Mail'

export default function RootLayout() {
  return (
    <>
      <div className='main-header'>
        <div className='navbar container'>
          <NavLink className='logo' to='/'>
            Booking.red
          </NavLink>
          <nav>
            <a to='/'>Register</a>
            <a to='/'>Sign In</a>
          </nav>
        </div>
      </div>
      <Outlet />
      <div className='main-header'>
        <Mail />
      </div>
      <Footer />
    </>
  )
}
