import React from 'react'
import Navbar1 from '../Navbar/Navbar1'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'

const Home = () => {
  return (
    <div>
      <Navbar1/>
      <Hero/>
      <Category/>
      <Values/>
      <Products/>
    </div>
  )
}

export default Home