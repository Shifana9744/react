import './App.css'
import Dairy from './components/Dairy/Dairy'
import Fruits from './components/Fruits/Fruits'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Seafood from './components/Seafood/Seafood'
import AllProducts from './components/AllProducts/AllProducts'
import Layout from './components/Layout/Layout'
import Products from './components/Products/Products'
import WishList from './components/WishList/WishList'
import Cart from './components/Cart/Cart'
import { CartProvider } from './components/Cart/CartContext'
import { WishlistProvider } from './components/WishList/WishlistContext'

function App() {

  // const [productId, setProductId] = useState()
  
  // const filteredObject = ProductList.filter((product)=> product.id == productId)
  // console.log('filteredObject is : ',filteredObject)
  // console.log(filteredObject.length)

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
        },
        {
          path : '/wish-list',
          element : <WishList />
        },
        {
          path : '/cart-section',
          element : <Cart />
        }
      ]
    }
  ])

  return (
    <WishlistProvider>
      <CartProvider>
      <RouterProvider router={router} /> 
     </CartProvider>
    </WishlistProvider>
     
      
  )
  
}

export default App
