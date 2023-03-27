import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { store } from './components/store'
// // layouts
// import RootLayout from './layouts/RootLayout'
// // pages
// import Home from './pages/Home'
// import Hotel from './pages/Hotel'
// import SearchHotels from './pages/SearchHotels'

// page
import RootLayout from './page/RootLayout'
import Login from './page/Login'
import ViewClient from './page/client/ViewClient'
import AddClient from './page/client/AddClient'
import Profile from './page/add client/Profile'
import Modules from './page/add client/Modules'
import Payment from './page/add client/Payment'
import Theme from './page/add client/Theme'
import Success from './page/add client/Success'
const User = false
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<RootLayout />}>
      <Route index element={User ? <ViewClient /> : <Login />} />
      <Route path='add-Client' element={<AddClient />}>
        <Route index element={<Profile />} />
        <Route path='payment' element={<Payment />} />
        <Route path='modules' element={<Modules />} />
        <Route path='theme' element={<Theme />} />
        <Route path='success' element={<Success />} />
      </Route>

      {/* <Route path='hotals'>
        <Route index element={<SearchHotels />} />
        <Route path=':hotelId' element={<Hotel/>} />
      </Route>  */}
    </Route>
  )
)

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path='register' element={<Home />} />
//       <Route path='hotals'>
//         <Route index element={<SearchHotels />} />
//         <Route path=':hotelId' element={<Hotel />} />
//       </Route>
//     </Route>
//   )
// )

function App() {
  // useEffect(() => {

  // }, [User])

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
