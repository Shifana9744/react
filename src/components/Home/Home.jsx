import React from 'react'
// import Navbar1 from '../Navbar/Navbar1'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Process from '../Process/Process'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <Values/>
      <Products />
      <Process/>
    </div>
  )
}

export default Home