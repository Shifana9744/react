import React from 'react'
import Navbar1 from '../Navbar/Navbar1'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar1 />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout