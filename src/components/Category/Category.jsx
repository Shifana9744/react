import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import Button from '../Button/Button'
// import '../Button/button.css'
import './category.css'
import { Link } from 'react-router-dom'

// category object
const category = [
  {
    id: 1,
    title: 'Fruits & Veggies',
    description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of fruits and vegetables.',
    image: FruitsCat,
    path: '/fruits'
  },
  {
    id: 2,
    title: 'Dairy & Eggs',
    description: 'Wholesome dairy products and free-range eggs. from creamy milk and yogurt to artificial cheeses.',
    image: DairyCat,
    path: '/dairy'
  },
  {
    id: 3,
    title: 'Meat & SeaFood',
    description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options and more.',
    image: SeaFoodCat,
    path: '/seafood'
  }
]

const Category = () => {
  const renderCards = category.map(card => {
    return (
      <div key={card.id} className='category-card'>
        <div className='card-image'>
          <img src={card.image} style={{ objectFit: 'cover', width: '100%', height: '200px' }} />
        </div>

        <div className='card-content'>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          {/* <Button content='See All'/> */}
          <Link to={card.path}><Button content='See All'/></Link>
        </div>
      </div>
    )
  })

  return (
    <div className='category-section py-3 my-5 mx-auto' id='category-section'>

      <div className='w-75 m-5 mx-auto' style={{height:'2px',backgroundColor:'orange'}}></div>
      <Heading highlight='Shop' heading='By Category' />

      {/* category cards */}
      <div className='category container pt-5'>
        {renderCards}
      </div>
    </div>
  )
}

export default Category
