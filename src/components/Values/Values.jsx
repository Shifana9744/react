import React from 'react'
import Heading from '../Heading/Heading'
import FavoriteIcon from '@mui/icons-material/Favorite';
import SpaIcon from '@mui/icons-material/Spa';
import ShieldIcon from '@mui/icons-material/Shield';
import CompostIcon from '@mui/icons-material/Compost';
import Basket from '../../assets/basket-full-vegetables.png'
import './values.css'

const values = [
  {
    id : 1,
    title : 'Trust',
    para : 'It is a long established fact that a reader will be distracted by the readable',
    icon : <FavoriteIcon/>
  },
  {
    id : 2,
    title : 'Always Fresh',
    para : 'It is a long established fact that a reader will be distracted by the readable',
    icon : <SpaIcon/>
  },
  {
    id : 3,
    title : 'Food Safety',
    para : 'It is a long established fact that a reader will be distracted by the readable',
    icon : <ShieldIcon/>
  },
  {
    id : 4,
    title : '100% Organic',
    para : 'It is a long established fact that a reader will be distracted by the readable',
    icon : <CompostIcon/>
  }
]

const Values = () => {

  const leftValues = values.slice(0,2).map(item => {
    return(
      <div key={item.id} className='d-flex flex-row-reverse align-items-center mb-4 left'>
        <div className='d-flex align-items-center logo-div'>
          <span className='d-flex align-items-center justify-content-center text-white ms-3 rounded-circle' style={{width:'40px',height:'40px',backgroundColor:'orange'}}>{item.icon}</span>
        </div>

        <div className='text-end'>
          <h3 className='heading' style={{color:'rgb(65, 65, 65)',fontWeight:'550'}}>{item.title}</h3>
          <p className='para' style={{color:'rgb(65, 65, 65)'}}>{item.para}</p>
        </div>
      </div>
    )
  })

  const rightValues = values.slice(0,2).map(item => {
    return(
      <div key={item.id} className='d-flex align-items-center mb-4 right h-100'>
        <div className='d-flex align-items-center logo-div'>
          <span className='d-flex align-items-center justify-content-center text-white rounded- me-3 rounded-circle' style={{width:'40px',height:'40px',backgroundColor:'orange'}}>{item.icon}</span>
        </div>

        <div className='text-start'>
          <h3 style={{color:'rgb(65, 65, 65)',fontWeight:'550'}}>{item.title}</h3>
          <p style={{color:'rgb(65, 65, 65)'}}>{item.para}</p>
        </div>
      </div>
    )
  })

  return (
    <section>
      <div className='container mx-auto py-5' style={{maxWidth:'1400px'}}>
        <Heading highlight='Our' heading='Values'/>

        <div className='row align-items-center mt-5'>
          {/* left values */}
          <div className='col-12 col-md-4 mb-4 mb-md-0'>
            {leftValues}
          </div>

          <div className='col-12 col-md-4 mb-4 mb-md-0 text-center'>
            <img src={Basket} alt="Basket of vegetables" style={{objectFit:'contain',minHeight:'300px'}} className='img-fluid'/>
          </div>

          {/* right values */}
          <div className='col-12 col-md-4'>
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values