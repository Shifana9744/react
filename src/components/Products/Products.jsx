import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'

const Products = () => {

  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Seafood']
  const [activeTab, setActiveTab] = useState('All')

  const renderCards = ProductList.map(product => {
    return (
      <Cards image={product.image} name={product.name} price={product.price} />
    )
  })

  return (
    <section>
      <div className='mx-auto px-5 py-5' style={{ maxWidth: '1400px' }}>
        <Heading highlight='Our' heading=' Products' />

        {/* tabs */}
        <div className='d-flex gap-3 justify-content-center mt-5'>
          {categories.map(category => {
            return (
              <button key={category} className='px-3 py-2 bg-light' style={{ borderRadius: '8px', cursor: 'pointer', background: `${activeTab === category ? 'orange' : 'light'}` }}
                onClick={() => setActiveTab(category)}
              >
                {/*  style={{background:`${activeTab === category ? 'orange': 'light'}`}} >*/}
                {category}
              </button>
            )
          })}
        </div>

        {/* product listing */}
        <div className='d-grid grid-cols-4'>
          
          {renderCards}
        </div>
      </div>
    </section>
  )
}

export default Products