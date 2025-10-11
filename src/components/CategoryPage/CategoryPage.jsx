import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../../components/ProductList/ProductList'
import Cards from '../Cards/Cards'

const CategoryPage = ({title, bgImage , categories}) => {

  // filter the items based on the category
  const filteredItems = categories.includes('All')
        ? ProductList 
        : ProductList.filter(item=> categories.includes(item.category));

  const renderProduct = filteredItems.map(product => {
    return(
      <Cards key={product.id} image={product.image} name={product.name} price={product.price}/>
    )
  })

  return (
    <div>
      <Banner title={title} bgImage={bgImage}/>

      <div className="row gap-3 mx-auto px-5 mt-4"  style={{maxWidth:'1400px'}}>
        {renderProduct}
      </div>
    </div>
  )
}

export default CategoryPage