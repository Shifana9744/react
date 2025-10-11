import './App.css'
import Dairy from './components/Dairy/Dairy'
import Fruits from './components/Fruits/Fruits'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Seafood from './components/Seafood/Seafood'
import AllProducts from './components/AllProducts/AllProducts'
import Layout from './components/Layout/Layout'
import Products from './components/Products/Products'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/fruits',
          element: <Fruits />
        },
        {
          path: '/dairy',
          element: <Dairy />
        },
        {
          path: '/seafood',
          element: <Seafood />
        },
        {
          path: '/allproducts',
          element: <AllProducts />
        },
        {
          path:'/product-section',
          element : <Products />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
