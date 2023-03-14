import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { store } from './components/store'
// layouts
import RootLayout from './layouts/RootLayout'
// pages
import Home from './pages/Home'
import Hotel from './pages/Hotel'
import SearchHotels from './pages/SearchHotels'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='register' element={<Home />} />
      <Route path='hotals'>
        <Route index element={<SearchHotels />} />
        <Route path=':hotelId' element={<Hotel />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
