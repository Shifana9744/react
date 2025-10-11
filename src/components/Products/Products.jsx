import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import ProductList from '../ProductList/ProductList';
import Cards from '../Cards/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Seafood', 'Meat'];
  const [activeTab, setActiveTab] = useState('All');

  // Filter products based on activeTab
  const filteredProducts = activeTab === 'All'
    ? ProductList
    : ProductList.filter(product => product.category === activeTab);

  const renderCards = filteredProducts.slice(0,8).map(product => (
    <div className="col-12 col-sm-6  col-md-4 col-lg-3 mb-3" key={product.id}>
      <Cards image={product.image} name={product.name} price={product.price} />
    </div>
  ));

  return (
    <section className="py-4" id='product-section'>
      <div className="container px-3" style={{ maxWidth: '1400px' }}>

        <div className='w-75 m-5 mx-auto' style={{height:'2px',backgroundColor:'orange'}}></div>
        <Heading highlight="Our" heading="Products" />

        {/* Category Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 mt-5" style={{paddingBottom: '2rem'}}>
          {categories.map(category => (
            <button
              key={category}
              className={`btn px-3 py-2 ${activeTab === category ? 'btn-warning' : 'btn-outline-secondary'}`}
              style={{ borderRadius: '8px' }}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="row g-3">
          {renderCards.length > 0 ? (
            renderCards
          ) : (
            <p className="text-center">No products found in this category.</p>
          )}
        </div>

        {/* view all button */}
        <div className='mt-5 text-center'>
          <Link to='/allproducts'>
            <Button content='View All'/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;