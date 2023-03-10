import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// pages
import Home from './pages/Home'
// layouts
import RootLayout from './layouts/RootLayout'
import { Provider } from 'react-redux'
import { store } from './components/store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='register' element={<Home />} />
      <Route path='signin' element={<Home />} />
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
