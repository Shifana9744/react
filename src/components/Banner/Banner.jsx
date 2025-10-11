import React from 'react'

const Banner = ({title,bgImage}) => {
  return (
    <div className='d-flex justify-content-center align-items-center' 
        style={{height:'50vh',backgroundColor:'lightgray',marginTop:'85px',backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3)),url(${bgImage})`,backgroundSize:'cover',
        backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
      <h2 className='bg-white p-3' style={{fontWeight:'bolder',color:'black',borderRadius:'8px',letterSpacing:'1.2px'}}>{title}</h2>
    </div>
  )
}

export default Banner