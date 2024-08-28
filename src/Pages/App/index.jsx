
// Primero react
import { useRoutes, BrowserRouter } from 'react-router-dom'

//  Pages
import { Home } from '../Home'
import { SignIn } from '../SignIn'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { NotFound } from '../NotFound'
import { MyOrders } from '../MyOrders'

// Componentes
import { Navbar } from '../../Components/Navbar'

// CSS de ultimo
import '../../App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/my-orders', element: <MyOrders /> },
  ])

  return routes
}

function App() {
  

  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export { App }
