import { Outlet, NavLink } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <div className=''>
        <h1>Sidebar</h1>
        <h2>header</h2>
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
