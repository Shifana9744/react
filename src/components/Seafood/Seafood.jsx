import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeafood from '../../assets/seafood-banner.jpg'

const Seafood = () => {
  return (
    <div>
      <CategoryPage title='Meat & SeaFood' bgImage={BgSeafood} categories={['Meat', 'Seafood']}/>
    </div>
  )
}

export default Seafood