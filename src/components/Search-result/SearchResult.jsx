import React from 'react'
import { useLocation } from 'react-router-dom'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgAll from '../../assets/all-banner.jpg'
import Cards from '../Cards/Cards'
import Banner from '../Banner/Banner'

const SearchResult = () => {

  const {state} = useLocation()
  const results = state?.results || []

  const renderProduct = results.map((product) => (
    <div key={product.id} className='col-md-3 mb-4'>
      <Cards image={product.image} name={product.name} price={product.price}/>
    </div>
  ))

  return (
    <div>
      <Banner title='Search Results' bgImage={BgAll}/>

      <div className="search-results-container">
      <Banner title="Search Results" bgImage={BgAll} />

      <div className="container my-5" style={{ maxWidth: '1400px' }}>
        {results.length > 0 ? (
          <div className="row g-3">{renderProduct}</div>
        ) : (
          <div className="text-center">
            <h5>No products found matching your search.</h5>
            <Link to="/" className="btn btn-primary mt-3">
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default SearchResult